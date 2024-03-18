import { TESTIMONIALS_DATA } from "@/constants/constants";
import Image from "next/image";
import React, { useState } from "react";

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
    <div className="py-16">
      <div className="">
        <h2 className="strike-text">
          {" "}
          <span className="font-bold">TESTIMONIALS</span>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-center">
        <div className="px-10 justify-center flex">
          <Image src={TESTIMONIALS_DATA[testimonial].src} width={400} height={500}></Image>
        </div>
        <div className="p-10 md:px-20 lg:w-1/2 flex flex-col justify-between text-[#454545]">
          <p className="text-xl md:text-2xl lg:text-4xl tracking-wide mb-4">
            {TESTIMONIALS_DATA[testimonial].testimonial}
          </p>
          <div>
            <h3 className="text-4xl">{TESTIMONIALS_DATA[testimonial].name}</h3>
            <hr className="h-[2px] my-2 bg-[#A7A098] border-0 rounded " />
            <p className="text-lg font-bold py-2">
              {TESTIMONIALS_DATA[testimonial].date}
            </p>
            <div className="flex gap-2">
              <div
                className={
                  "p-2 font-bold border-2 border-black cursor-pointer " +
                  (testimonial === 0
                    ? "bg-white text-black"
                    : "bg-black text-white")
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
                  "p-2 font-bold border-2 border-black cursor-pointer " +
                  (testimonial === TESTIMONIALS_DATA.length - 1
                    ? "bg-white text-black"
                    : "bg-black text-white")
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
          </div>
        </div>
      </div>
    </div>
  );
}
