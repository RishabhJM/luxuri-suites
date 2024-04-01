import Layout from "@/components/Layout/Layout";
import SimpleSlider from "@/components/Misc/SimpleSlider";
import { AREA_ATTRACTIONS, BEACHES, DINNING } from "@/constants/constants";
import Image from "next/image";
import React from "react";

export default function guide() {
  return (
    <Layout>
      <div>
        <div>
          <div className="relative w-full h-[45vh] xl:h-[50vh] bg-black">
            <Image
              src={"/hero.png"}
              fill
              className="object-cover opacity-25"
              alt=""
            ></Image>
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white top-1/2 relative">
              MIAMI BEACH GUIDE
            </h1>
          </div>
          <div className="text-center px-6 py-10 font-light text-xl bg-[#F0F0F0]">
            <p>
              Step into the world-renowned South Beach paradise. Experience
              vibrant nightlife with buzzing bars and clubs that keep their
              doors open till dawn. Often dubbed as America&apos;s Riviera,
              South Beach&apos;s Ocean Drive beckons with its stunning populace,
              alluring eateries, and charming sidewalk cafes.
            </p>
            <p className="py-4">
              Whether you&apos;re here for leisure or work, Ocean Five Hotel on
              Ocean Drive ensures you&apos;re just steps away from top-notch
              shopping, breathtaking beaches, attractions, and a scintillating
              nightlife. The famed Lincoln Road, Miami Beach Convention Centre,
              a pedestrian haven boasting boutiques, restaurants, galleries, and
              people-watching opportunities, all lie within a mile of the hotel.
              Furthermore, the Art Deco District, characterized by its
              pastel-colored 1930s architecture, awaits just beyond your
              doorstep. This South Beach getaway promises non-stop thrills!
            </p>

            <p>
              Singles, couples, and families alike can revel in the abundance of
              attractions. And why wait? South Beach blesses you with year-round
              summer weather. It&apos;s time to seize the moment!
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="relative lg:w-[55vw] h-[500px] bg-black">
            <Image src={"/guide1.png"} fill className="p-6 md:p-16" alt=""></Image>
          </div>
          <div className="lg:w-[45vw] bg-[#D9D9D9] text-center p-4 md:p-10 flex flex-col justify-center">
            <h3 className="text-5xl pb-10">The Art Deco District</h3>
            <p className="pb-10">
              Situated in South Beach, the Art Deco National District in Miami
              Beach boasts a compact square mile. It hosts the world&apos;s most
              abundant collection of Art Deco structures, showcasing pre-war
              modernism with intricate geometric details and signature curved
              edges.
            </p>
            <p>
              After undergoing meticulous and extensive renovation in recent
              times, these 1920s to early 1940s buildings now shine in their
              original splendor. Within this area, you&apos;ll discover over 800
              officially recognized historic edifices, featuring vibrant hues
              and nostalgic motifs, forming an enchanting seaside panorama.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col">
          <div className="relative lg:w-[55vw] h-[500px] bg-black">
            <Image src={"/guide2.png"} fill className="p-6 md:p-16"></Image>
          </div>
          <div className="lg:w-[45vw] bg-[#D9D9D9] text-center p-4 md:p-10 flex flex-col justify-center">
            <h3 className="text-5xl pb-10">Area Attractions</h3>
            <SimpleSlider
              dots={true}
              noOfSlides={1}
              autoPlay={false}
              infinite={true}
              arrows={true}
            >
              {AREA_ATTRACTIONS.map((t) => (
                <div key={t.title}>
                  <div className="pb-6 flex flex-col items-center">
                    <h4 className="text-lg font-semibold">{t.title}</h4>
                    <p className="w-2/3 text-[#757575]">{t.address}</p>
                  </div>

                  <p>{t.data}</p>
                </div>
              ))}
            </SimpleSlider>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="relative lg:w-[55vw] h-[500px] bg-black">
            <Image src={"/guide3.png"} fill className="p-6 md:p-16" alt=""></Image>
          </div>
          <div className="lg:w-[45vw] bg-[#D9D9D9] text-center p-4 md:p-10 flex flex-col justify-center">
            <h3 className="text-5xl pb-10">Dinning</h3>
            <SimpleSlider
              dots={true}
              noOfSlides={1}
              autoPlay={false}
              infinite={true}
              arrows={true}
            >
              {DINNING.map((t) => (
                <div key={t.title}>
                  <div className="pb-6 flex flex-col items-center">
                    <h4 className="text-lg font-semibold">{t.title}</h4>
                    <p className="w-2/3 text-[#757575]">{t.address}</p>
                  </div>

                  <p>{t.data}</p>
                </div>
              ))}
            </SimpleSlider>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col">
          <div className="relative lg:w-[55vw] h-[500px] bg-black">
            <Image src={"/guide4.png"} fill className="p-6 md:p-16" alt=""></Image>
          </div>
          <div className="lg:w-[45vw] bg-[#D9D9D9] text-center p-4 md:p-10 flex flex-col justify-center">
            <h3 className="text-5xl pb-10">Beaches</h3>
            <SimpleSlider
              dots={true}
              noOfSlides={1}
              autoPlay={false}
              infinite={true}
              arrows={true}
            >
              {BEACHES.map((t) => (
                <div key={t.title}>
                  <div className="pb-6 flex flex-col items-center">
                    <h4 className="text-lg font-semibold">{t.title}</h4>
                    <p className="w-2/3 text-[#757575]">{t.address}</p>
                  </div>

                  <p>{t.data}</p>
                </div>
              ))}
            </SimpleSlider>
          </div>
        </div>
        <div className="bg-[#F0F0F0] py-32"></div>
      </div>
    </Layout>
  );
}
