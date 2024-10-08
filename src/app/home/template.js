"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { animatePageIn } from "@/lib/animations";
import Navbar from "@/components/pages/navbar";
import gsap from "gsap";
import Footer from "@/components/pages/footer";

export default function Template({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  // useEffect(() => {
  //   animatePageIn();
  // }, []);

  return (
    <>
      {/* <div
        id="transition"
        className="fixed min-h-screen bg-white inset-0 w-full z-[90]"
      /> */}

      <Navbar />

      <ReactLenis
        root
        ref={lenisRef}
        autoRaf={false}
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
      >
        <main>{children}</main>
      </ReactLenis>

      <Footer />
    </>
  );
}
