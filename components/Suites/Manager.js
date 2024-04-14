import Image from "next/image";
import React from "react";

export default function Manager() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-2/5 h-[600px]  relative">
        <Image className="object-cover" src="/paris.png" fill alt=""></Image>
        {/* <img src="/paris.png" alt="" /> */}
      </div>
      <div className="lg:w-3/5 bg-black text-white px-8 xs:px-12 sm:px-20 md:px-32 py-10 flex flex-col justify-between">
        <div className="pb-10">
          <h3 className="text-4xl md:text-6xl lg:text-6xl pb-8">
            Hi! I&apos;m Paris
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            mauris et lectus elementum porta. Sed dictum elit eget ipsum
            porttitor, vitae tristique arcu iaculis. Nullam faucibus, urna sed
            ultrices interdum, risus felis fringilla neque, ac convallis nulla
            ligula id tortor. Aliquam ornare dolor nec nisl iaculis varius.
            Fusce dictum dictum diam semper faucibus. Duis vel nisi ut nunc
            molestie pulvinar sit amet eu ligula. Nam iaculis vitae arcu eget
            lacinia. Pellentesque euismod arcu nec neque gravida, ac euismod
            dui.
          </p>
        </div>

        <button
          className="rounded-full h-[40px] w-fit px-4 py-auto text-md xsm:text-md lg:text-xl text-white bg-[#1E1E1E]"
          type="button"
        //   onClick={() => Router.push(`/suites/${hotel}`)}
        >
          Contact Now
        </button>
      </div>
    </div>
  );
}
