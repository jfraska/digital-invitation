import { Selina, Catamaran } from "@/styles/fonts";
import { Cover as CoverWrapper } from "@/components/container/wrapper-template";
import Editable from "@/components/container/editable";

export default function Cover() {
  return (
    <CoverWrapper className="relative hidden md:flex w-full bg-cover flex-col justify-end gap-5 items-start p-32">
      <h2 className={`${Catamaran.className} text-xl mt-16 text-white`}>
        THE WEDDING OF
      </h2>
      <h1 className={`${Selina.className} text-7xl font-medium text-white`}>
        <Editable type="text" field="heading" section="cover" />
      </h1>
    </CoverWrapper>
  );
}
