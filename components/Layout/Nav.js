import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const isActive = (href) => router.pathname.includes(href);
  return (
    <div className="w-screen flex lg:flex-row flex-col justify-between py-4 px-6 text-white bg-black fixed z-30 bg-opacity-75">
      <div className="items-center flex justify-between">
        <div className="cursor-pointer" onClick={() => Router.push("/")}>
          <svg
            width="150"
            height="32"
            viewBox="0 0 207 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[160px] lg:[320px] xlg:w-[320px]"
          >
            <g clip-path="url(#clip0_327_2)">
              <path
                d="M0 31.2186V0H6.49686V26.7875H20.5691V31.2163L0 31.2186Z"
                fill="white"
              />
              <path
                d="M35.4114 0H41.9082V19.1326C41.9082 22.1561 42.4077 24.3396 43.4067 25.6833C44.4057 27.027 46.0156 27.6968 48.2366 27.6929C50.3594 27.6929 51.8956 27.0531 52.8455 25.7734C53.7953 24.4936 54.2703 22.4333 54.2703 19.5923V0H59.9225V19.1736C59.9225 22.059 59.6496 24.2566 59.1037 25.7663C58.5578 27.2761 57.5592 28.5874 56.108 29.7002C54.1256 31.2326 51.4609 31.9992 48.1138 32C44.5265 32 41.6435 31.1843 39.4646 29.5529C37.9603 28.4275 36.9075 27.0952 36.3062 25.5558C35.705 24.0164 35.4063 21.8679 35.4102 19.1104L35.4114 0Z"
                fill="white"
              />
              <path
                d="M75.1465 31.2186L85.1456 15.8409L75.5898 0H83.1629L89.5123 10.5045L96.3882 0H101.64L92.0647 14.7238L101.978 31.2174H94.4265L87.6559 20.0591L80.4034 31.2174L75.1465 31.2186Z"
                fill="white"
              />
              <path
                d="M117.119 0H123.616V19.1326C123.616 22.1561 124.115 24.3396 125.113 25.6833C126.111 27.027 127.721 27.6968 129.942 27.6929C132.065 27.6929 133.601 27.0531 134.551 25.7734C135.5 24.4936 135.974 22.4333 135.974 19.5923V0H141.628V19.1736C141.628 22.059 141.355 24.2566 140.809 25.7663C140.263 27.2761 139.264 28.5874 137.813 29.7002C135.831 31.2326 133.166 31.9992 129.819 32C126.232 32 123.349 31.1843 121.17 29.5529C119.665 28.4275 118.612 27.0952 118.011 25.5558C117.411 24.0164 117.112 21.8679 117.115 19.1104L117.119 0Z"
                fill="white"
              />
              <path
                d="M159.723 31.2186V0H171.41C174.503 0 176.861 0.657404 178.486 1.97222C180.11 3.28703 180.922 5.21012 180.922 7.74148C180.937 9.62004 180.374 11.4577 179.309 13.0054C178.233 14.5869 176.751 15.8 174.864 16.6445L185.074 31.2198H177.163L169.421 18.4588H165.836V31.2186H159.723ZM165.841 14.1752H167.338C172.048 14.1752 174.404 12.2696 174.404 8.45855C174.404 5.67373 172.302 4.28132 168.097 4.28132H165.841V14.1752Z"
                fill="white"
              />
              <path
                d="M200.07 31.2186V0H206.567V31.2186H200.07Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_327_2">
                <rect width="206.567" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
              <Link
                href={item.href}
                key={item.key}
                className={
                  isActive(item.href) ? "p-4 text-[#FD9E0F]" : "p-4 text-white"
                }
                onClick={() => Router.push(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="hidden w-full lg:flex justify-between text-[12px] xlg:text-[16px] pl-12 pr-8 xlg:pl-32 xlg:pr-24">
        {NAV_LINKS.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className={
              isActive(item.href) ? "p-4 text-[#FD9E0F]" : "p-4 text-white"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
