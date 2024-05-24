import React from "react";
import SimpleSlider from "../Misc/SimpleSlider";
import { PROPERTIES_DATA } from "@/constants/constants";
import Image from "next/image";

export default function HeroMw(suite) {
    const suiteIdx = suite.suite;
    const suiteData = PROPERTIES_DATA[suiteIdx];
    console.log(suiteData);
  return (
    <div className="w-full md:w-3/5 h-[80vh] md:h-[90vh]">
      <SimpleSlider
        dots={true}
        noOfSlides={1}
        autoPlay={false}
        infinite={false}
        arrows={false}
      >
        {suiteData.images.map((t) => (
          <div className="relative w-fit h-[80vh] md:h-[90vh]" key={t}>
            <Image src={t} className="object-cover" fill alt=""></Image>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}

