import {
  SHOPPING,
  TESTIMONIALS,
  TESTIMONIALS_DATA,
} from "@/constants/constants";
import Image from "next/image";
import React, { useState } from "react";
import SimpleSlider from "./Misc/SimpleSlider";

export default function Testimonials() {
  const [testimonial, setTestimonial] = useState(0);
  function nextPage() {
    if (testimonial !== TESTIMONIALS_DATA.length - 1) {
      setTestimonial(testimonial + 1);
    }
  }
  function PrevPage() {
    if (testimonial !== 0) {
      setTestimonial(testimonial - 1);
    }
  }
  return (
    <div className="py-10 md:pt-12" id="testimonials">
      {/* <div className="flex">
        <div className="border-b-[3px] border-[#A7A098] leading-[0.1em] w-1/5 mt-[10px] mb-[20px]"></div>
        <h2 className="strike-text">
          <span className="font-bold">TESTIMONIALS</span>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-center p-2 lg:p-12">
        <div className="px-10 justify-center flex">
          <Image
            src={TESTIMONIALS_DATA[testimonial].src}
            width={400}
            height={500}
            alt=""
          ></Image>
        </div>
        <div className="pt-10 px-10 md:px-12 lg:w-1/2 flex flex-col justify-between text-[#454545]">
          <p className="text-xl md:text-2xl lg:text-3xl tracking-wide mb-4">
            {TESTIMONIALS_DATA[testimonial].testimonial}
          </p>
          <div>
            <div className="pb-6">
              <h3 className="text-4xl">
                {TESTIMONIALS_DATA[testimonial].name}
              </h3>
              <hr className="h-[2px] my-2 bg-[#A7A098] border-0 rounded " />
              <p className="text-lg font-bold pb-2">
                {TESTIMONIALS_DATA[testimonial].date}
              </p>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div
                className={
                  "p-2 font-bold border-2 md:border-4 border-[#1E1E1E] cursor-pointer " +
                  (testimonial === 0
                    ? "bg-white text-[#1E1E1E]"
                    : "bg-[#1E1E1E] text-white")
                }
                onClick={() => PrevPage()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[16px] sm:w-[28px] lg:w-[36px] h-auto"
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
                  "p-2 font-bold border-2 md:border-4 border-[#1E1E1E] cursor-pointer " +
                  (testimonial === TESTIMONIALS_DATA.length - 1
                    ? "bg-white text-[#1E1E1E]"
                    : "bg-[#1E1E1E] text-white")
                }
                onClick={() => nextPage()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[16px] sm:w-[28px] lg:w-[36px] h-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex py-4">
        <div className="border-b-[1px] border-[#A7A098] leading-[0.1em] w-1/5 mt-[10px] mb-[20px]"></div>
        <h2 className="strike-text">
          <span className="font-bold">TESTIMONIALS</span>
        </h2>
      </div>
      <div className="px-10 testimonials-slider">
        <SimpleSlider
          dots={false}
          noOfSlides={3}
          infinite={true}
          arrows={false}
          autoPlaySpeed={3000}
          speed={1000}
          mdSlides={2}
        >
          {TESTIMONIALS.map((t) => (
            <div
              className="rounded-lg p-[2px] xsm:h-[360px] sm:h-[300px] bg-gradient-to-r from-[#262626] via-[#fffff] to-[#ffffff] text-white shadow-lg"
              key={t.key}
            >
              <div className="p-4 flex flex-col h-full w-full  bg-[#262626] back rounded-lg">
                <div className="flex">
                  <Image
                    src={t.src}
                    width={50}
                    height={50}
                    className="rounded-full mr-4 w-[50px] h-[50px]"
                  ></Image>
                  <div className="lg:text-lg text-sm">
                    <h3 className="font-semibold">{t.name}</h3>
                    <div className="text-white text-xl xsm:text-3xl">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <div className="mb-2 lg:text-md text-sm pb-4">
                  <q>{t.description}</q>
                </div>
                <p className="text-white absolute bottom-2">{t.date}</p>
              </div>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
  );
}
