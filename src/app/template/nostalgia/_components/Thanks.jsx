import { GenteRomantica } from "@/styles/fonts";
import Animate from "@/styles/animations/animate";

export default function Thanks() {
  return (
    <section className="relative w-full h-full bg-cover flex flex-col justify-center items-center bg-[#333333] pb-10">
      <Animate animationType="slowFade" className="flex">
        <h1 className={`${GenteRomantica.className} text-5xl font-medium w-2/4`}>
        Thank You
      </h1>
      </Animate>
      <Animate animationType="slowFade"  className="flex justify-center">
        <p className="w-2/4 pt-10">
        Merupakan suatu kebahagiaan dan kehormataan bagi kami, apabila
        Bapak/Ibu/Saudara, berkenaan hadir dan memberikan do’a restu kepada
        kami.
      </p>
      </Animate>
      <Animate animationType="slowFade">
        <div className="absolute bottom-5 inset-x-0 w-full text-center">
        <h2 className="text-xs">© ZoeJeton</h2>
        <h2 className="text-xs pt-3">© All right reserved by ZoeJeton</h2>
      </div>
      </Animate>
    </section>
  );
}
