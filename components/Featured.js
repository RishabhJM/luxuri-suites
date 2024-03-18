import Image from "next/image";
import React, { useState } from "react";
import SimpleSlider from "./Misc/SimpleSlider";
import { PROPERTIES_DATA } from "@/constants/constants";
import Suite from "@/pages/suites/[suite]";
import Router from "next/router";

export default function Featured() {
  const [hotel, setHotel] = useState(0);

  function nextPage() {
    if (hotel !== PROPERTIES_DATA.length - 1) {
      setHotel(hotel + 1);
    }
  }
  function PrevPage() {
    if (hotel !== 0) {
      setHotel(hotel - 1);
    }
  }
  return (
    <div className="bg-black text-white">
      <div className="text-4xl md:text-6xl lg:text-8xl px-4 sm:p-8 border-b-[1px] border-[#555555]">
        <h1 className="sm:px-4">
          Featured <span className="font-bold">SUITES</span>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-3/5 h-[90vh]">
          <SimpleSlider
            dots={true}
            noOfSlides={1}
            autoPlay={false}
            infinite={false}
            arrows={false}
          >
            {PROPERTIES_DATA[hotel].images.map((t) => (
              <div className="relative w-fit h-[90vh]" key={t}>
                <Image src={t} className="object-cover" fill alt=""></Image>
              </div>
            ))}
          </SimpleSlider>
        </div>
        <div className="md:w-2/5 p-6 md:p-10 lg:p-16 flex flex-col justify-between">
          <div>
            <h2 className="font text-3xl md:text-5xl lg:text-8xl font-bold pb-6">
              {PROPERTIES_DATA[hotel].title}
            </h2>
            <p className="pb-4 text-xl font-extralight">
              {PROPERTIES_DATA[hotel].description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 md:gap-6 lg:gap-8">
              <div
                className={
                  "p-2 font-bold border-4 border-white cursor-pointer " +
                  (hotel === 0 ? "bg-black text-white" : "bg-white text-black")
                }
                onClick={() => PrevPage()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[16px] sm:w-[28px] lg:w-[36px] xlg:w-[60px] h-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div
                className={
                  "p-2 font-bold border-4 border-white cursor-pointer " +
                  (hotel === PROPERTIES_DATA.length - 1
                    ? "bg-black text-white"
                    : "bg-white text-black")
                }
                onClick={() => nextPage()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[16px] sm:w-[28px] lg:w-[36px] xlg:w-[60px] h-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <button
              className="rounded-full h-[60px] w-fit px-4 py-auto text-md xsm:text-md lg:text-2xl xlg:text-3xl text-white bg-[#1E1E1E]"
              type="button"
              onClick={() => Router.push(`/suites/${hotel}`)}
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
