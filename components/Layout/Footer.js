import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import Socials from "../Misc/Socials";

export default function Footer() {
  const inputStyle = "rounded-xl p-4 mb-8 border border-gray-500 text-black";
  return (
    <div className=" h-full bg-black text-white gap-8 justify-between px-4 py-8 md:p-16 lg:p-24 pb-16">
      <div className="flex lg:flex-row flex-col justify-between border-b-2 border-gray-500 pb-10">
        <div className="flex flex-col justify-between lg:w-1/3 px-10">
          <div className="flex flex-col justify-between my-4">
            <h1 className="text-5xl">Luxuri Suites</h1>
            <p className="text-2xl">Get in touch</p>
          </div>
          <Socials></Socials>
        </div>
        <div className="flex flex-col lg:w-1/3 px-10">
          <input className={inputStyle} type="text" placeholder="Name" />
          <input className={inputStyle} type="text" placeholder="Email" />
          <textarea className={inputStyle} type="text" placeholder="Message" />
          <span>
            <input type="checkbox" className="bg-black"/>
            <span className="px-2">I would like to recieve the newsletter.</span>
          </span>
          <button type="submit" className="btn-footer">
            Submit
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between my-6">
        {FOOTER_LINKS.map((item) => (
          <Link className="mb-2" href={item.href} key={item.key}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
