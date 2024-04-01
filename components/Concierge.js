import Image from "next/image";
import  Router  from "next/router";
import React from "react";

export default function Concierge() {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black" id="concierge">
      <Image className="object-cover opacity-60" src="/image1.jpg" fill alt=""></Image>
      <div className="flex flex-col justify-between z-10 text-center">
        <div className="text-white text-5xl lg:text-6xl font-semibold pb-4"><h2>CONCIERGE</h2></div>
        <div><button className="text-lg rounded-full py-1 font-semibold px-4 bg-white opacity-75 text-black" onClick={() => Router.push('/concierge')} >
          EXPLORE
        </button></div>
      </div>
    </div>
  );
}
