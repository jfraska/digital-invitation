"use client";
import "./style.css";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Hamburger from "../Hamburger";
import localFont from "next/font/local";
import { Icon } from "@iconify/react";
import Cart from "./Cart";
import Menu from "./Menu";
import CartContext from "@/providers/CartProvider";
import { AnimatePresence } from "framer-motion";
import Notif from "./Notif";

const runalto = localFont({
  src: "../../assets/fonts/runalto/runalto.ttf",
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [notifState, setNotifState] = useState(false);
  const [shake, setShake] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", ({ scroll }) => {
        if (scroll.y > 600) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);

  useEffect(() => {
    if (notifState) {
      setTimeout(() => {
        setNotifState(false);
      }, 2000);
    }
  }, [notifState]);

  useEffect(() => {
    if (cart?.cartItems?.length > 0) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 100);
    }
  }, [cart]);

  return (
    <nav>
      <div
        className={`top-0 inset-x-0 z-50 py-4 px-[3%] flex justify-between items-center mx-auto ${
          scrolled
            ? "fixed bg-primary text-black"
            : "absolute bg-transparent text-white"
        } transition-all ease-linear`}
      >
        <Hamburger
          state={menuState}
          setState={setMenuState}
          scroll={scrolled}
        />
        <h1
          className={`${runalto.className} font-bold ${
            menuState ? "text-black" : null
          } hidden md:block transition-all ease-linear text-lg font-bold leading-none`}
        >
          ZoeJeton
        </h1>

        <button
          onClick={() => {
            if (cart?.cartItems?.length > 0) {
              setMenuState(false);
              setCartState(true);
            } else {
              setNotifState(true);
            }
          }}
          className={`flex gap-1 text-base cursor-pointer ${
            menuState ? "text-black" : null
          } transition-all ease-linear`}
        >
          <p className="leading-tight mt-px">Cart</p>
          <div className={`${shake ? "shake" : null} relative text-end`}>
            <Icon icon="grommet-icons:shop" width="20" />
            <span className="absolute top-0.5 -right-0.5 text-[10px] leading-none flex justify-center items-center w-3  bg-red-500 text-white border-none rounded-full overflow-hidden">
              {cart?.cartItems?.length || ""}
            </span>
          </div>
        </button>

        <button
          className={`${
            menuState ? "block" : "hidden"
          } text-black text-lg absolute md:top-3 top-3 md:left-20 left-12 transition-all ease-in-out delay-100`}
          onClick={() => setMenuState(false)}
        >
          Close
        </button>
      </div>

      <AnimatePresence mode="wait">{notifState && <Notif />}</AnimatePresence>

      <Cart state={cartState} setState={setCartState} />

      <Menu state={menuState} setState={setMenuState} scroll={scroll} />
    </nav>
  );
}
