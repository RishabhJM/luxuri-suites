import Layout from "@/components/Layout/Layout";
import { BLOGS } from "@/constants/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Suite() {
  const router = useRouter();
  const path = router.pathname;
  const blog = path.slice(-1);
  console.log();
  const blogIndex = Number(blog) || 0;
  return (
    <Layout>
      <div>
        <div className="relative w-full h-[50vh] bg-black">
          <Image
            src={BLOGS[blog].src}
            fill
            className="object-cover opacity-25"
            alt=""
          ></Image>
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white top-1/2 relative">
            {BLOGS[blog].title}
          </h1>
        </div>
        <div className="px-40 py-10 flex">
          <div className="flex">
            <div className="border-b-[1px] border-[#A7A098] leading-[0.1em] w-1/5 mt-[10px] mb-[20px]"></div>
            <h2 className="strike-text">
              <span className="font-bold">{BLOGS[blog].date}</span>
            </h2>
          </div>

          <div>
            When the sun sets, Miami Beach comes alive with pulsating beats,
            dazzling lights, and an electrifying atmosphere that's second to
            none. From trendy rooftop bars to legendary nightclubs, the city
            offers a nightlife scene that's as diverse as it is exhilarating.
            Here are some of the hottest clubs and bars to check out on your
            next night out:
            <ol className="py-10">
              <li>
                LIV Nightclub: Step into the ultimate nightlife destination at
                LIV, an iconic nightclub located inside the Fontainebleau Miami
                Beach. With its stunning design, state-of-the-art sound system,
                and VIP bottle service, it's no wonder why LIV is consistently
                ranked among the top clubs in the world.
              </li>
              <li>
                Story Nightclub: Get ready for an unforgettable night out at
                Story, a high-energy nightclub known for its immersive
                theatrical productions and top-notch DJ lineup. Dance the night
                away on the expansive dance floor, or retreat to one of the
                club's exclusive VIP tables for a more intimate experience.
              </li>
              <li>
                Mango's Tropical Cafe: Experience the rhythm of the tropics at
                Mango's Tropical Cafe, a vibrant Latin nightclub located on
                Ocean Drive. Enjoy live music, colorful dancers, and signature
                cocktails as you salsa the night away in this lively and festive
                atmosphere.
              </li>
              <li>
                E11even Miami: Elevate your nightlife experience at E11even
                Miami, a 24/7 ultraclub that combines cutting-edge entertainment
                with unparalleled luxury. From live performances and aerial
                acrobatics to world-class DJs and exotic dancers, E11even offers
                a one-of-a-kind nightlife experience you won't find anywhere
                else.
              </li>
              <li>
                Nikki Beach: Escape to paradise at Nikki Beach, a beachfront
                club and restaurant located on Ocean Drive. Relax in a cabana by
                day and dance under the stars by night, as DJs spin a mix of
                house music and international beats against the backdrop of the
                ocean.
              </li>
              <li>
                The Broken Shaker: Sip craft cocktails in a laid-back atmosphere
                at The Broken Shaker, a hip cocktail bar located inside the
                Freehand Miami hostel. With its cozy courtyard and eclectic
                décor, it's the perfect spot to unwind with friends after a long
                day of sunbathing and sightseeing.
              </li>
              <li>
                Basement Miami: Take your night out to the next level at
                Basement Miami, a unique nightlife destination located inside
                the Miami Beach EDITION hotel. Dance to the beats of
                world-renowned DJs in the club, bowl a strike at the retro
                bowling alley, or challenge your friends to a game of ping pong
                in the lounge.
              </li>
              <li>
                The Rooftop at 1 Hotel South Beach: Enjoy panoramic views of the
                Miami skyline and ocean at The Rooftop, a chic rooftop bar
                located atop the 1 Hotel South Beach. Sip handcrafted cocktails
                and sample gourmet bites as you soak up the sun and take in the
                breathtaking vistas.
              </li>
              <li>
                Ball & Chain: Step back in time at Ball & Chain, a historic bar
                and live music venue located in the heart of Little Havana.
                Dance to the rhythms of live salsa and jazz bands, sip on
                classic cocktails, and experience the vibrant culture of Miami's
                Cuban community.
              </li>
              <li>
                Wet Willie's: Cool off with a frozen daiquiri at Wet Willie's, a
                lively beachfront bar known for its colorful slushie drinks and
                laid-back vibe. With a variety of flavors to choose from, it's
                the perfect spot to kick back, relax, and enjoy the ocean
                breeze.
              </li>
            </ol>
            From glamorous nightclubs to trendy rooftop bars, Miami Beach offers
            a nightlife scene that's as diverse as it is electrifying. So put on
            your dancing shoes, gather your friends, and get ready for a night
            out on the town you won't soon forget!
          </div>
        </div>
      </div>
    </Layout>
  );
}
