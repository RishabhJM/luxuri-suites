import Layout from "@/components/Layout/Layout";
import { BLOGS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Router, { useRouter } from "next/router";



export default function Guide() {
    const router = useRouter();
  return (
    <Layout>
      <div>
        <div>
          <div className="relative w-full h-[50vh] bg-black">
            <Image
              src={"/blog-hero.jpeg"}
              fill
              className="object-cover opacity-25"
              alt=""
            ></Image>
            <h1 className="text-3xl md:text-5xl  text-center text-white top-1/2 relative">
              DISCOVER LUXURI
            </h1>
          </div>
          <div className="flex-col flex md:flex-row justify-center items-center px-6 py-10 font-light bg-[#F0F0F0] text-black">
            {BLOGS.map((item,index) => (
              <div key={item.key} className="px-2 py-4 sm:px-6 se:w-[500px]">
                <div className="relative w-auto h-[400px] cursor-pointer">
                  <Image src={item.src} className="rounded-2xl shadow-md object-cover" alt="" fill onClick={() => Router.push(`/blogs/blog-${index}`)}/>
                </div>
                <div>
                  <p className="py-4">{item.date}</p>
                  <Link href={`/blogs/blog-${index}`} className="font-bold text-[#495057] text-xl">{item.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
