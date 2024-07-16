import { GenteRomantica, Catamaran } from "@/styles/fonts";
import Animate from "@/styles/animations/animate";

export default function LiveStream() {
  return (
    <section
      className="relative w-full h-screen bg-[#333333] p-10 flex flex-col text-center justify-between gap-10"
    >
      <Animate animationType="fadeSlide">
        <h1 className={`${GenteRomantica.className} text-5xl`}>Live Streaming</h1>
      </Animate>
      <Animate animationType="fadeSlide">
        <h2 className={`${Catamaran.className}text-lg`}>MINGGU, 30 JUNI 2023 </h2>
      </Animate>
      <Animate animationType="fadeSlide">
        <h2 className={`${Catamaran.className}text-lg`}>12.00-14.00</h2>
      </Animate>
      <Animate animationType="fadeSlide">
        <p className={`${Catamaran.className}text-lg`}>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>
      </Animate>
      
      <button className="border border-foreground py-2 px-10 mt-10 rounded-3xl">
        Join Now
      </button>
    </section>
  );
}
