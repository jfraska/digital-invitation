"use client";

import { Selina, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";

export default function Beranda() {
  return (
    <Section
      className="flex flex-col gap-10 justify-around items-center h-full"
      id="beranda"
    >
      <div className="flex flex-col gap-5">
        <h2 className={`${Catamaran.className} text-lg`}>THE WEDDING OF</h2>
        <h1 className={`${Selina.className} text-5xl font-medium`}>
          <Editable type="text" field="heading" section="beranda" />
        </h1>
        <h3 className={`${Catamaran.className} text-base`}>
          <Editable type="text" field="date" section="beranda" />
        </h3>
      </div>
      <h3 className={`${Catamaran.className} text-base w-72`}>
        <Editable type="text" field="subheading" section="beranda" />
      </h3>
    </Section>
  );
}
