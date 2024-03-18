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
      <div className="text-3xl md:text-5xl lg:text-7xl p-6 border-b-[1px]">
        <h1>
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
              <div className="relative w-fit h-[85vh]" key={t}>
                <Image
                  src={t}
                  className="object-cover"
                  fill
                  alt=""
                ></Image>
              </div>
            ))}
          </SimpleSlider>
        </div>
        <div className="md:w-2/5 p-6 flex flex-col justify-between">
          <div>
            <h2 className="font text-3xl md:text-5xl lg:text-7xl font-bold pb-6">
              {PROPERTIES_DATA[hotel].title}
            </h2>
            <p className="pb-4">{PROPERTIES_DATA[hotel].description}</p>
          </div>
          <div className="flex justify-between md:pb-[18px]">
            <div className="flex gap-4">
              <div
                className={
                  "p-2 font-bold border-2 border-white cursor-pointer " +
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
                  class="w-6 h-6"
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
                  "p-2 font-bold border-2 border-white cursor-pointer " +
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
                  class="w-6 h-6"
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
              className="rounded-full  px-4 text-xl text-white bg-[#1E1E1E] font-semibold"
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
