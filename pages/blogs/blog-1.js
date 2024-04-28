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
        <div className="px-10 sm:px-20 md:px-40 lg:px-60 py-10">
          <div className="flex">
            <div className="border-b-[1px] border-[#A7A098] leading-[0.1em] w-1/5 mt-[10px] mb-[20px]"></div>
            <h2 className="strike-text">
              <span className="font-bold">{BLOGS[blog].date}</span>
            </h2>
          </div>

          <div>
            While Miami Beach is best known for its stunning beaches and vibrant
            nightlife, there&apos;s so much more to discover beyond the tourist
            hotspots. From hidden gems tucked away in historic neighborhoods to
            local hangouts beloved by residents, here are some
            off-the-beaten-path attractions to explore in Miami Beach:
            <ol className="py-6 list-decimal ml-8">
              <li>
                Flamingo Park: Escape the crowds and enjoy a peaceful retreat at
                Flamingo Park, a sprawling green space located in the heart of
                South Beach. Take a leisurely stroll along the walking paths,
                relax beneath the shade of a palm tree, or play a game of tennis
                on one of the park&apos;s courts.
              </li>
              <li>
                The Wolfsonian-FIU Museum: Dive into Miami Beach&apos;s cultural
                scene at The Wolfsonian-FIU Museum, a hidden gem housed in a
                historic Art Deco building on Washington Avenue. Explore the
                museum&apos;s extensive collection of decorative arts, propaganda
                posters, and industrial design objects from the 19th and 20th
                centuries.
              </li>
              <li>
                Miami Beach Botanical Garden: Discover a lush oasis of
                tranquility at the Miami Beach Botanical Garden, a hidden gem
                nestled amidst the hustle and bustle of South Beach. Wander
                through the winding paths, admire the exotic plants and flowers,
                and find a quiet spot to relax and unwind.
              </li>
              <li>
                Sunset Harbour: Explore the trendy neighborhood of Sunset
                Harbour, located west of South Beach along the Intracoastal
                Waterway. Stroll along the waterfront promenade, browse the
                boutiques and specialty shops, and dine at one of the
                neighborhood&apos;s chic restaurants and cafés.
              </li>
              <li>
                Normandy Isle: Step back in time and explore the charming
                neighborhood of Normandy Isle, located on a picturesque island
                in Biscayne Bay. Admire the Art Deco architecture, stroll along
                the tree-lined streets, and enjoy a leisurely brunch at one of
                the local eateries.
              </li>
              <li>
                Miami Beach Boardwalk: Take a scenic stroll along the Miami
                Beach Boardwalk, a picturesque pathway that stretches for miles
                along the oceanfront. Enjoy panoramic views of the Atlantic
                Ocean, watch the cruise ships sail by, and soak up the sun as
                you walk, jog, or bike along the promenade.
              </li>
              <li>
                Pelican Harbor Marina: Discover a hidden gem for nature lovers
                at Pelican Harbor Marina, a peaceful waterfront park located on
                the northern tip of Miami Beach. Explore the mangrove forests,
                go birdwatching, or rent a kayak and paddle through the calm
                waters of Biscayne Bay.
              </li>
              <li>
                Miami Beach Cinematheque: Immerse yourself in the world of film
                at the Miami Beach Cinematheque, a nonprofit art house cinema
                located in the historic City Hall building. Catch a screening of
                independent films, documentaries, and foreign classics, or
                attend one of the theater&apos;s special events and film festivals.
              </li>
              <li>
                Mount Sinai Park: Escape the hustle and bustle of the city and
                reconnect with nature at Mount Sinai Park, a serene green space
                located on the western edge of Miami Beach. Enjoy a picnic in
                the shade, go for a hike along the nature trails, or simply
                relax and enjoy the peaceful surroundings.
              </li>
              <li>
                The Bass Museum of Art: Explore Miami Beach&apos;s vibrant arts scene
                at The Bass Museum of Art, a contemporary art museum housed in a
                historic Art Deco building on Collins Avenue. Discover an
                impressive collection of modern and contemporary artworks,
                including paintings, sculptures, and installations by both
                emerging and established artists.
              </li>
            </ol>
            From tranquil parks and hidden gardens to cultural institutions and
            local landmarks, Miami Beach is full of hidden gems waiting to be
            discovered. So venture off the beaten path and experience the city
            like a local as you uncover these hidden treasures.
          </div>
        </div>
      </div>
    </Layout>
  );
}
