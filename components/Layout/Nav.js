import { NAV_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col justify-between py-6 px-10 text-white bg-black">
      <div className="items-center flex justify-between">
        <div onClick={() => Router.push('/')}>
          <h1 className="text-5xl font-semibold cursor-pointer">LUXURI</h1>
        </div>
        {!openNav && (
          <div
            className={"cursor-pointer lg:hidden"}
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
        {openNav && (
          <div
            className={"inline-block cursor-pointer lg:hidden"}
            onClick={() => setOpenNav(!openNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      {openNav && (
        <div className="lg:hidden w-auto flex justify-center text-center">
          <div className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <Link href={item.href} key={item.key} className="p-4">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="flex lg:w-3/4 text-2xl">
        <div className="hidden lg:flex justify-end">
          {NAV_LINKS.map((item) => (
            <Link href={item.href} key={item.key} className="p-4">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
