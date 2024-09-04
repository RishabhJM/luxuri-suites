import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Suites/Hero";
import HeroMw from "@/components/Suites/HeroMw";
import Highlight from "@/components/Suites/Highlight";
import Manager from "@/components/Suites/Manager";
import Results from "@/components/Suites/Results";
import { PROPERTIES_DATA } from "@/constants/constants";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { Result } from "postcss";
import React from "react";

export default function Suite() {
  const router = useRouter();
  const { suite } = router.query;
  const suiteIndex = Number(suite) || 0;
  return (
    <Layout>
      {/* <Hero></Hero> */}
      <div className="bg-[#f0f0f0] pb-4">
        <div className="hidden md:block"><Hero suite={suiteIndex}></Hero></div>
        <div className="block md:hidden"><HeroMw suite={suiteIndex}></HeroMw></div>
        <Results suite={suiteIndex}></Results>
        <Manager></Manager>
        {/* <Highlight></Highlight> */}
      </div>
      {/* <h1>{PROPERTIES_DATA[suite].title}</h1> */}
    </Layout>
  );
}


