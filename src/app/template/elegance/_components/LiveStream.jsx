import { Selina, Catamaran } from "@/styles/fonts";
import Editable from "@/components/container/editable";
import { Section } from "@/components/container/wrapper-template";
import Image from "next/image";

export default function LiveStream() {
  return (
    <Section
      className="bg-[#333333] text-white flex items-center justify-center min-h-screen py-8 px-5"
      id="live-streaming"
    >
      <div className="max-w-md w-full">
        <h1 className={`${Selina.className} text-6xl font-light mb-4`}>
          LIVE <br /> STREAMING
        </h1>
        <Editable
          type="text"
          field="date"
          section="live-streaming"
          className={`${Catamaran.className} text-lg mb-8`}
        />
        <Editable
          type="text"
          field="time"
          section="live-streaming"
          className={`${Catamaran.className} text-lg mb-8`}
        />
        <div className="mb-8">
          <Editable
            className="relative w-full h-56 rounded-xl overflow-hidden"
            type="image"
            field="image"
            section="live-streaming"
          >
            <Image
              fill
              alt="image"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Editable>
        </div>
        <Editable
          type="text"
          field="subheading"
          section="live-streaming"
          className={`${Catamaran.className} mb-8`}
        />
        <Editable type="link" field="link" section="live-streaming">
          <a
            href="/"
            target="_blank"
            className="bg-transparent hover:bg-gray-900 text-white font-normal py-2 px-4 rounded-lg border border-white w-56"
          >
            Join Now
          </a>
        </Editable>
      </div>
    </Section>
  );
}
