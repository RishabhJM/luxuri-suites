import { FOOTER_LINKS } from "@/constants/constants";
import Link from "next/link";
import Socials from "../Misc/Socials";

export default function Footer() {
  const inputStyle = "rounded-xl p-2 mb-8 border border-gray-500 text-black placeholder-black";
  return (
    <div className=" h-full bg-black text-white gap-8 justify-between px-4 py-8 md:p-16 lg:p-24 pb-16">
      <div className="flex lg:flex-row flex-col justify-between border-b-2 border-gray-500 pb-10">
        <div className="flex flex-col justify-between lg:w-1/3 pb-6">
          <div className="flex flex-col justify-between my-4">
            <h1 className="text-5xl font-bold pb-2">Luxuri Suites</h1>
            <p className="text-2xl">Get in touch</p>
          </div>
          <Socials></Socials>
        </div>
        {/* <div className="flex flex-col lg:w-1/2 lg:pr-40">
          <input className={inputStyle} type="text" placeholder="Name" />
          <input className={inputStyle} type="text" placeholder="Email" />
          <textarea className={inputStyle} type="text" placeholder="Message" />
          <span className="pb-4">
            <input type="checkbox" className="bg-black accent-gray-500"/>
            <span className="px-2">I would like to recieve the newsletter.</span>
          </span>
          <button type="submit" className="rounded-xl bg-[#302C33] text-white sm:w-[160px] py-2 px-4 font-bold">
            Submit
          </button>
        </div> */}
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between mt-6">
        {FOOTER_LINKS.map((item) => (
          <Link className="mb-2" href={item.href} key={item.key}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
