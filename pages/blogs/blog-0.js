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
          <div className="flex w-[200px]">
            <span className="font-bold">{BLOGS[blog].date}</span>
            <div className="border-b-[5px] border-[#A7A098] leading-[0.1em] w-1/5 mt-[10px] mb-[20px]"></div>
          </div>

          <div>
            When it comes to iconic beaches, Miami Beach reigns supreme. With
            its pristine white sands, crystal-clear waters, and endless
            sunshine, it's no wonder why millions of visitors flock to this
            tropical paradise each year. Here's your ultimate guide to Miami
            Beach's most breathtaking beaches:
            <ol className="py-6">
              <li classname="py-2">
                South Beach: Arguably the most famous beach in Miami Beach,
                South Beach stretches for miles along the Atlantic Ocean and is
                renowned for its vibrant atmosphere and lively energy. Whether
                you're soaking up the sun, people-watching on Ocean Drive, or
                taking a dip in the turquoise waters, South Beach offers
                something for everyone.
              </li>
              <li classname="py-2">
                Lummus Park Beach: Located in the heart of South Beach, Lummus
                Park Beach is a popular spot for sunbathing, swimming, and beach
                volleyball. With its palm-lined promenade, colorful lifeguard
                stands, and iconic Art Deco buildings as a backdrop, it's the
                perfect place to capture that quintessential Miami Beach vibe.
              </li>
              <li classname="py-2">
                North Beach: Escape the crowds and discover the tranquility of
                North Beach, a quieter stretch of shoreline located north of
                63rd Street. Here, you'll find fewer tourists and more locals
                enjoying the pristine beaches, scenic walking paths, and
                waterfront parks.
              </li>
              <li classname="py-2">
                Haulover Beach: For those who prefer a more au naturel
                experience, Haulover Beach is Miami Beach's only legal
                clothing-optional beach. Nestled between the Intracoastal
                Waterway and the Atlantic Ocean, this secluded stretch of sand
                is perfect for sunbathers looking to soak up the sun without any
                tan lines.
              </li>
              <li classname="py-2">
                Bal Harbour Beach: Indulge in luxury and sophistication at Bal
                Harbour Beach, a pristine stretch of coastline lined with
                upscale resorts, designer boutiques, and gourmet restaurants.
                Lounge in a cabana, sip cocktails by the pool, or stroll along
                the jetty for breathtaking views of the ocean.
              </li>
              <li classname="py-2">
                Crandon Park Beach: Venture beyond Miami Beach to nearby Key
                Biscayne and discover the natural beauty of Crandon Park Beach.
                This family-friendly destination offers calm, shallow waters
                perfect for swimming, as well as picnic areas, nature trails,
                and an adjacent wildlife sanctuary.
              </li>
              <li classname="py-2">
                Sunny Isles Beach: Experience the glamour of Sunny Isles Beach,
                a posh enclave located between Miami Beach and Fort Lauderdale.
                With its luxurious high-rise hotels, pristine beaches, and
                upscale shopping centers, it's a favorite destination for
                affluent travelers and jet-setters.
              </li>
              <li classname="py-2">
                Virginia Key Beach: History meets recreation at Virginia Key
                Beach, a historic African-American beach that played a
                significant role in the civil rights movement. Today, visitors
                can enjoy swimming, kayaking, and picnicking amidst lush
                mangroves and scenic waterfront vistas.
              </li>
              <li classname="py-2">
                Bill Baggs Cape Florida State Park: Discover the natural beauty
                of Bill Baggs Cape Florida State Park, located at the southern
                tip of Key Biscayne. With its scenic lighthouse, nature trails,
                and secluded beaches, it's the perfect destination for outdoor
                enthusiasts and nature lovers.
              </li>
              <li classname="py-2">
                Surfside Beach: Escape the crowds and enjoy a peaceful day at
                Surfside Beach, a hidden gem nestled between Bal Harbour and
                Miami Beach. With its soft sands, gentle surf, and relaxed
                atmosphere, it's the ideal spot for a quiet seaside retreat.
              </li>
            </ol>
            Whether you're seeking excitement and adventure or peace and
            tranquility, Miami Beach's beaches offer something for everyone. So
            grab your sunscreen, pack your beach towel, and get ready to soak up
            the sun in paradise.
          </div>
        </div>
      </div>
    </Layout>
  );
}
