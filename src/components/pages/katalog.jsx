"use client";

import { useContext, useState } from "react";
import { templates } from "@/constant";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import CartContext from "@/context/cart";
import TransitionLink from "@/components/UI/TransitionLink";
import LoadingButton from "@/components/UI/loading-button";
import { Parallax } from "@/lib/parallax";

export default function Katalog() {
  const { addItemToCart } = useContext(CartContext);

  const numberOfColumns = 4;
  const elementsPerColumn = Math.ceil(templates.length / numberOfColumns);

  const columns = [];
  for (let i = 0; i < numberOfColumns; i++) {
    columns.push(
      templates.slice(i * elementsPerColumn, (i + 1) * elementsPerColumn)
    );
  }

  function getStyleByIndex(index) {
    let style = {};

    if (index === 0) {
      style = { speed: 0 };
    } else if (index === 1) {
      style = { speed: -3, style: { marginTop: "10%" } };
    } else if (index === 2) {
      style = { speed: -1, style: { marginTop: "5%" } };
    } else if (index === 3) {
      style = { speed: -2, style: { marginTop: "8%" } };
    }

    return style;
  }

  const addToCartHandler = (product) => {
    addItemToCart({
      product: product.id,
      name: product.name,
      price: product.price,
      type: product.type,
      // image: product.images[0].url,
    });
  };

  return (
    <section
      data-scroll-section
      id="katalog"
      className="px-[3%] pb-10 bg-white"
    >
      <div className="w-full mt-1.5 border-b border-black" />
      <div className="flex justify-between items-center text-base mt-2 gap-10">
        <h1 className="text-3xl">Katalog</h1>
        <h1 className="md:block hidden">Showing 8/12</h1>
        <div className="flex justify-between items-center h-full">
          <button
            type="submit"
            className="flex px-1 md:text-base text-sm uppercase justify-center items-center border border-black rounded-full text-black"
          >
            latest tamplate
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-6 w-full justify-between items-center">
        {columns.map((column, index) => (
          <Parallax
            {...getStyleByIndex(index)}
            key={index}
            className={`${
              index === 0 ? "flex" : "hidden md:flex"
            } flex-col md:max-w-[340px] w-11/12 md:w-[24%] gap-5`}
          >
            {column.map((e) => (
              <div
                key={e.id}
                className="group relative w-[320px] h-[400px] border border-black rounded-lg hover:bg-[#0000008e] transition-all ease-in-out bg-cover bg-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/collection/2091539/500x400')",
                }}
              >
                <TransitionLink
                  className="absolute aspect-square top-4 right-4 group-hover:scale-100 scale-0 transition-transform ease-in-out bg-black flex justify-center items-center px-3 rounded-full hover:bg-[#00000068]"
                  href={
                    process.env.NEXT_PUBLIC_VERCEL_ENV
                      ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${e.href}`
                      : `http://template.localhost:3000/${e.href}`
                  }
                >
                  <span
                    className="w-5 aspect-square icon-[ph--eye]"
                    style={{ color: "white" }}
                  />
                </TransitionLink>

                <div className="absolute bottom-4 left-4">
                  <h1 className="text-lg font-medium bg-black text-white w-fit leading-tight rounded">
                    {e.name}
                  </h1>
                  <h1 className="text-base font-normal bg-black text-white w-fit leading-tight rounded">
                    <CurrencyFormat
                      value={e.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"IDR "}
                      suffix={".-"}
                    />
                  </h1>
                </div>
                <LoadingButton
                  onClick={() => addToCartHandler(e)}
                  className="absolute bottom-4 right-4 bg-black flex justify-center items-center p-2 rounded-md hover:bg-[#00000068]"
                >
                  <Image
                    src={"/assets/icons/cart.svg"}
                    width="20"
                    height="20"
                    alt="cart"
                    className="w-5 aspect-square"
                  />
                </LoadingButton>
              </div>
            ))}
          </Parallax>
        ))}
      </div>
      <TransitionLink
        href={"/katalog"}
        className="my-20 mx-auto flex hover-underline-animation w-11/12 md:w-1/4 py-2 pr-1 items-end justify-between"
      >
        <h1 className="text-base text-black">See all our template</h1>
        <span
          className="w-5 aspect-square icon-[carbon--arrow-up]"
          style={{ color: "black", transform: "rotate(90deg)" }}
        />
      </TransitionLink>
    </section>
  );
}
