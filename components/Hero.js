import Image from "next/image";
import { Router } from "next/router";

export default function Hero() {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black">
      <Image className="object-cover opacity-60" src="/hero.png" fill></Image>
      <div className="text-center text-white z-10">
        <div className="pb-4 md:pb-10">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest">LUXURI</h1>
          <p className="text-5xl font-light tracking-widest">SUITES</p>
        </div>
        <button className="rounded-full py-[2px] px-4 bg-white opacity-75 text-black font-semibold" type="button" onClick={() => Router.push('/suites')} >
          EXPLORE
        </button>
      </div>
    </div>
  );
}
