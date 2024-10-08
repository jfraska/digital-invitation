"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { feature } from "@/constant";

export default function Feature() {
  const sectionRef = useRef(null);
  const trigerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx;
    ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        x: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 0.5,
          pin: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx && ctx.revert();
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden h-full"
      ref={trigerRef}
      id="feature"
    >
      <div ref={sectionRef} className="w-fit h-screen flex flex-nowrap">
        <div className="relative w-screen h-full flex justify-center items-center">
          <h1 className="text-[#c7c7c7] text-center font-serif md:text-9xl text-5xl leading-none mix-blend-difference">
            Feature
          </h1>

          <div
            className="absolute inset-0 m-auto -z-10 md:md:w-[30vw] w-[60vw] h-[50vh] bg-cover"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/collection/2091539/1000x300')",
            }}
          />
        </div>
        <div className="relative w-screen h-full">
          <div
            className="absolute inset-0 m-auto -z-10 md:w-[30vw] w-[60vw] h-[50vh] bg-cover"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/collection/2091539/1000x200')",
            }}
          />
        </div>
        <div className="relative w-screen h-full">
          <div
            className="absolute inset-0 m-auto -z-10 md:w-[30vw] w-[60vw] h-[50vh] bg-cover"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/collection/2091539/1000x100')",
            }}
          />
        </div>
        <div className="relative w-screen h-full">
          <div
            className="absolute inset-0 m-auto -z-10 md:w-[30vw] w-[60vw] h-[50vh] bg-cover"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/collection/2091539/1000x600')",
            }}
          />
        </div>
      </div>
      {/* <div className="flex mt-10 w-full items-center">
        <div className="w-[40%]">
          <div className="w-[50%] m-auto">
            <h1 className="text-4xl">Feature</h1>
            <h2 className="font-bold text-4xl">Premium</h2>
            <p className="text-sm">
              Our seamless and stylish digital wedding invitations are designed
              to make your special moments even more memorable. With us, you'll
              discover an eco-friendly and user-friendly solution that can also
              be customized to reflect your unique style and love story.
            </p>
          </div>
        </div>

        <div className="w-[60%]">
          <div
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#feature"
            className="flex w-[70%] m-auto flex-col bg-[#013A81] p-4 justify-start items-center text-white rounded-lg"
          >
            {feature.map((e) => (
              <div
                key={e.id}
                className="flex w-full py-2 pr-2 border-b border-white m-2 items-end justify-between"
              >
                <h1 className="text-xl leading-tight">
                  {e.title} <br />
                  <span className="text-base">{e.desc}</span>
                </h1>
                <Icon icon="iconoir:arrow-bl" color="white" width="30" />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
