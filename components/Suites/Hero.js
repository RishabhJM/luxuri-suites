import { PROPERTIES_DATA } from "@/constants/constants";
import Image from "next/image";
import React, { useState } from "react";

export default function Hero({ suite }) {
  const featureClass = " group flex items-center";
  const [hotel, setHotel] = useState(0);

  function nextPage() {
    if (hotel !== PROPERTIES_DATA[suite].images.length - 1) {
      setHotel(hotel + 1);
    }
  }
  function PrevPage() {
    if (hotel !== 0) {
      setHotel(hotel - 1);
    }
  }
  return (
    <div className="pt-20 md:pt-24 md:px-10 bg-black">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/5 h-[80vh] relative">
          <Image
            className="object-cover"
            src={PROPERTIES_DATA[suite].images[hotel]}
            fill
            alt=""
          ></Image>
        </div>
        <div className="lg:w-2/5 flex flex-col">
          <div className="flex">
            <div className="w-[500px] h-[20vh] relative">
              <Image
                className="object-cover"
                src={PROPERTIES_DATA[suite].images[1]}
                onClick={() => {
                  setHotel(1);
                }}
                fill
                alt=""
              ></Image>
            </div>
            <div className="w-[500px] h-[20vh] relative">
              <Image
                className="object-cover"
                src={PROPERTIES_DATA[suite].images[2]}
                onClick={() => {
                  setHotel(2);
                }}
                fill
                alt=""
              ></Image>
            </div>
          </div>
          <div className="flex">
            <div className="w-[500px] h-[20vh] relative">
              <Image
                className="object-cover"
                src={PROPERTIES_DATA[suite].images[3]}
                onClick={() => {
                  setHotel(3);
                }}
                fill
                alt=""
              ></Image>
            </div>
            <div className="w-[500px] h-[20vh] relative">
              <Image
                className="object-cover"
                src={PROPERTIES_DATA[suite].images[4]}
                onClick={() => {
                  setHotel(4);
                }}
                fill
                alt=""
              ></Image>
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-between py-16 md:py-16 lg:py-12 h-[40vh]">
            <div className="flex px-16 lg:px-20 justify-between">
              <div className={featureClass}>
                <h1 className="text-white hidden group-hover:block text-center">
                  WIFI
                </h1>

                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:hidden"
                >
                  <path
                    d="M27.5361 23.6323C25.3957 21.7699 22.6002 20.6426 19.5381 20.6426C16.476 20.6426 13.6805 21.7699 11.5362 23.6361C11.477 23.6895 11.4408 23.7638 11.4351 23.8433C11.4294 23.9228 11.4547 24.0014 11.5058 24.0627L12.8769 25.6966C12.9873 25.8261 13.1815 25.8413 13.311 25.7309C14.9716 24.2684 17.1501 23.3848 19.5381 23.3848C21.9261 23.3848 24.1046 24.2684 25.7651 25.7271C25.8946 25.8375 26.0889 25.8223 26.1993 25.6928L27.5704 24.0589C27.677 23.9332 27.6618 23.7428 27.5361 23.6323ZM32.0074 18.2965C28.6292 15.4819 24.2836 13.7871 19.5381 13.7871C14.7926 13.7871 10.447 15.4819 7.06494 18.2965C7.00307 18.3487 6.96434 18.4232 6.95721 18.5038C6.95007 18.5844 6.97511 18.6646 7.02685 18.7269L8.39795 20.3607C8.50459 20.4902 8.69883 20.5055 8.82451 20.3988C11.7305 17.9842 15.4667 16.5293 19.5381 16.5293C23.6095 16.5293 27.3457 17.9842 30.2479 20.3988C30.3773 20.5055 30.5678 20.4902 30.6744 20.3607L32.0455 18.7269C32.1521 18.5974 32.1369 18.4031 32.0074 18.2965ZM36.452 13.0025C31.8284 9.20918 25.9099 6.93164 19.4619 6.93164C13.0559 6.93164 7.17539 9.17871 2.56318 12.9264C2.53149 12.9518 2.50522 12.9834 2.48591 13.0191C2.4666 13.0549 2.45464 13.0942 2.45073 13.1346C2.44683 13.1751 2.45106 13.2159 2.46318 13.2547C2.47529 13.2935 2.49505 13.3295 2.52129 13.3605L3.89238 14.9944C3.99902 15.1201 4.18945 15.1392 4.31514 15.0363C8.45508 11.681 13.7224 9.67383 19.4619 9.67383C25.2434 9.67383 30.5449 11.7114 34.6963 15.1087C34.8258 15.2153 35.0162 15.1963 35.1228 15.0668L36.4939 13.4329C36.6044 13.3034 36.5854 13.1092 36.452 13.0025ZM17.0625 29.6309C17.0625 30.2773 17.3193 30.8973 17.7764 31.3544C18.2335 31.8116 18.8535 32.0684 19.5 32.0684C20.1465 32.0684 20.7665 31.8116 21.2236 31.3544C21.6807 30.8973 21.9375 30.2773 21.9375 29.6309C21.9375 28.9844 21.6807 28.3644 21.2236 27.9073C20.7665 27.4502 20.1465 27.1934 19.5 27.1934C18.8535 27.1934 18.2335 27.4502 17.7764 27.9073C17.3193 28.3644 17.0625 28.9844 17.0625 29.6309Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={featureClass}>
                <h1 className="text-white hidden group-hover:block text-center">
                  AC
                </h1>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:hidden"
                >
                  <path
                    d="M19.4997 39C19.1765 39 18.8665 38.8716 18.6379 38.643C18.4094 38.4145 18.2809 38.1045 18.2809 37.7812V34.6296L16.7063 36.2066C16.4775 36.4352 16.1672 36.5634 15.8438 36.5632C15.5204 36.563 15.2103 36.4343 14.9818 36.2054C14.7533 35.9766 14.625 35.6663 14.6252 35.3429C14.6255 35.0195 14.7542 34.7094 14.983 34.4809L18.2809 31.1829V21.6109L9.99345 26.3957L8.78445 30.9051C8.70041 31.2173 8.49577 31.4834 8.21556 31.6447C7.93534 31.8061 7.6025 31.8495 7.29026 31.7655C6.97802 31.6815 6.71195 31.4768 6.55058 31.1966C6.38922 30.9164 6.34578 30.5836 6.42982 30.2713L7.00751 28.1214L4.27751 29.6961C3.99774 29.8551 3.6664 29.8971 3.35581 29.8128C3.04522 29.7284 2.78059 29.5247 2.61967 29.246C2.45875 28.9673 2.41461 28.6362 2.49687 28.3251C2.57913 28.0139 2.78112 27.748 3.05876 27.5852L5.78876 26.0106L3.63401 25.4329C3.4794 25.3913 3.33451 25.3196 3.20759 25.222C3.08068 25.1244 2.97423 25.0027 2.89433 24.864C2.81443 24.7252 2.76265 24.5721 2.74193 24.4133C2.72121 24.2546 2.73196 24.0933 2.77357 23.9387C2.81518 23.7841 2.88684 23.6392 2.98445 23.5123C3.08206 23.3854 3.20371 23.2789 3.34246 23.199C3.48121 23.1191 3.63434 23.0673 3.7931 23.0466C3.95186 23.0259 4.11315 23.0366 4.26776 23.0783L8.77226 24.2848L17.0622 19.5L8.7747 14.7152L4.26532 15.9218C3.95511 15.9991 3.62694 15.9514 3.35155 15.789C3.07616 15.6266 2.8756 15.3625 2.79311 15.0537C2.71062 14.7448 2.75279 14.4159 2.91054 14.1378C3.0683 13.8597 3.329 13.6548 3.63645 13.5671L5.78876 12.9894L3.05876 11.4148C2.91903 11.3354 2.7964 11.2291 2.69793 11.102C2.59945 10.975 2.52707 10.8298 2.48496 10.6747C2.44285 10.5195 2.43183 10.3576 2.45255 10.1982C2.47327 10.0389 2.52531 9.88514 2.60567 9.74594C2.68604 9.60675 2.79314 9.48483 2.92082 9.38719C3.0485 9.28956 3.19423 9.21815 3.34962 9.17707C3.50501 9.13598 3.66699 9.12604 3.82624 9.14782C3.98548 9.16959 4.13885 9.22265 4.27751 9.30394L7.00751 10.8786L6.42982 8.72625C6.38547 8.57068 6.37253 8.40784 6.39176 8.24723C6.41099 8.08661 6.46201 7.93143 6.54183 7.79073C6.62165 7.65003 6.72868 7.52663 6.85669 7.42772C6.98469 7.32881 7.1311 7.25637 7.28739 7.21463C7.44368 7.17289 7.60671 7.16268 7.76698 7.1846C7.92726 7.20651 8.08156 7.26011 8.22091 7.34228C8.36025 7.42444 8.48184 7.53352 8.5786 7.66317C8.67535 7.79281 8.74533 7.94041 8.78445 8.09737L9.99101 12.6043L18.2809 17.3891V7.81706L14.983 4.51912C14.8697 4.40597 14.7798 4.27161 14.7184 4.1237C14.657 3.9758 14.6253 3.81725 14.6252 3.65711C14.6251 3.49697 14.6566 3.33838 14.7177 3.19039C14.7789 3.0424 14.8686 2.90791 14.9818 2.79459C15.0949 2.68128 15.2293 2.59136 15.3772 2.52998C15.5251 2.46859 15.6837 2.43694 15.8438 2.43682C16.0039 2.43671 16.1625 2.46814 16.3105 2.52932C16.4585 2.59049 16.593 2.68022 16.7063 2.79338L18.2809 4.37044V1.21875C18.2809 0.895517 18.4094 0.585524 18.6379 0.356964C18.8665 0.128404 19.1765 0 19.4997 0C19.8229 0 20.1329 0.128404 20.3615 0.356964C20.59 0.585524 20.7184 0.895517 20.7184 1.21875V4.37044L22.2955 2.79338C22.5244 2.56485 22.8346 2.43659 23.158 2.43682C23.4814 2.43705 23.7915 2.56575 24.02 2.79459C24.2486 3.02344 24.3768 3.3337 24.3766 3.65711C24.3764 3.98052 24.2477 4.2906 24.0188 4.51912L20.7184 7.81706V17.3891L29.0059 12.6043L30.2149 8.09494C30.299 7.7827 30.5036 7.51663 30.7838 7.35526C31.0641 7.1939 31.3969 7.15046 31.7091 7.2345C32.0214 7.31854 32.2874 7.52318 32.4488 7.80339C32.6102 8.08361 32.6536 8.41644 32.5696 8.72869L31.9943 10.8786L34.7243 9.30394C35.0041 9.14487 35.3354 9.10292 35.646 9.18724C35.9566 9.27157 36.2212 9.47532 36.3822 9.75403C36.5431 10.0327 36.5872 10.3638 36.505 10.6749C36.4227 10.9861 36.2207 11.252 35.9431 11.4148L33.2131 12.9894L35.3654 13.5671C35.6776 13.6512 35.9437 13.8558 36.1051 14.136C36.2664 14.4162 36.3099 14.7491 36.2258 15.0613C36.1418 15.3736 35.9371 15.6396 35.6569 15.801C35.3767 15.9624 35.0439 16.0058 34.7316 15.9218L30.2271 14.7152L21.9372 19.5L30.2247 24.2848L34.7316 23.0783C35.0439 22.9945 35.3766 23.0383 35.6566 23.1999C35.9366 23.3615 36.1409 23.6277 36.2246 23.9399C36.3083 24.2521 36.2646 24.5849 36.103 24.8648C35.9414 25.1448 35.6752 25.3492 35.3629 25.4329L33.2106 26.0106L35.9406 27.5852C36.2183 27.748 36.4203 28.0139 36.5025 28.3251C36.5848 28.6362 36.5406 28.9673 36.3797 29.246C36.2188 29.5247 35.9542 29.7284 35.6436 29.8128C35.333 29.8971 35.0017 29.8551 34.7219 29.6961L31.9919 28.1214L32.5671 30.2738C32.6115 30.4293 32.6244 30.5922 32.6052 30.7528C32.586 30.9134 32.5349 31.0686 32.4551 31.2093C32.3753 31.35 32.2683 31.4734 32.1403 31.5723C32.0123 31.6712 31.8659 31.7436 31.7096 31.7854C31.5533 31.8271 31.3902 31.8373 31.23 31.8154C31.0697 31.7935 30.9154 31.7399 30.776 31.6577C30.6367 31.5756 30.5151 31.4665 30.4184 31.3368C30.3216 31.2072 30.2516 31.0596 30.2125 30.9026L29.0059 26.3957L20.7184 21.6109V31.1829L24.0164 34.4809C24.2452 34.7094 24.3739 35.0195 24.3742 35.3429C24.3744 35.6663 24.2461 35.9766 24.0176 36.2054C23.7891 36.4343 23.479 36.563 23.1556 36.5632C22.8322 36.5634 22.5219 36.4352 22.2931 36.2066L20.716 34.6296V37.7812C20.716 38.1045 20.5876 38.4145 20.359 38.643C20.1305 38.8716 19.8205 39 19.4973 39H19.4997Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={featureClass}>
                <h1 className="text-white hidden group-hover:block text-center">
                  CAFE
                </h1>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:hidden"
                >
                  <path
                    d="M14.5869 28.6406H21.9756C24.2273 28.6381 26.3861 27.7424 27.9783 26.1502C29.5706 24.558 30.4662 22.3992 30.4688 20.1475V18.8906H32.2969C33.7514 18.8906 35.1464 18.3128 36.1749 17.2843C37.2034 16.2558 37.7812 14.8608 37.7812 13.4062C37.7812 11.9517 37.2034 10.5567 36.1749 9.52821C35.1464 8.49969 33.7514 7.92188 32.2969 7.92188H6.09375V20.1475C6.09631 22.3992 6.99195 24.558 8.58417 26.1502C10.1764 27.7424 12.3352 28.6381 14.5869 28.6406ZM30.4688 10.3594H32.2969C33.105 10.3594 33.8799 10.6804 34.4513 11.2518C35.0227 11.8232 35.3438 12.5982 35.3438 13.4062C35.3438 14.2143 35.0227 14.9893 34.4513 15.5607C33.8799 16.1321 33.105 16.4531 32.2969 16.4531H30.4688V10.3594ZM8.53125 10.3594H28.0312V20.1475C28.0295 21.753 27.3909 23.2922 26.2556 24.4275C25.1203 25.5627 23.5811 26.2013 21.9756 26.2031H14.5869C12.9814 26.2013 11.4422 25.5627 10.3069 24.4275C9.17163 23.2922 8.53304 21.753 8.53125 20.1475V10.3594ZM1.21875 31.6875H37.7812V34.125H1.21875V31.6875Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex px-16 lg:px-20 justify-between">
              <div className={featureClass}>
                <h1 className="text-white hidden group-hover:block text-center">
                  GYM
                </h1>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:hidden"
                >
                  <path
                    d="M32.9449 16.0373L27.3516 8.0504L30.015 6.18652L35.6066 14.1734L32.9449 16.0373ZM29.8834 20.1648L27.0884 16.1689L13.7764 25.4899L16.5714 29.4825L13.9096 31.348L6.4541 20.6978L9.11585 18.8339L11.9109 22.8281L25.2229 13.5071L22.4279 9.5129L25.0896 7.64902L32.5451 18.2976L29.8834 20.1631V20.1648ZM33.7427 11.51L36.4045 9.64615L34.5406 6.9844L31.8789 8.84827L33.7427 11.51ZM11.6476 30.9499L6.05435 22.963L3.3926 24.8269L8.98423 32.8138L11.6476 30.9499ZM7.12035 30.152L4.4586 32.0159L2.59473 29.3541L5.25648 27.4903L7.12035 30.152Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={featureClass}>
                <h1 className="text-white hidden group-hover:block text-center">
                  BAR
                </h1>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:hidden"
                >
                  <path
                    d="M10.3594 4.875C8.58189 4.87597 6.87749 5.5825 5.62062 6.83937C4.36375 8.09624 3.65722 9.80064 3.65625 11.5781C3.65625 15.277 6.66047 18.2812 10.3594 18.2812C11.3502 18.2812 12.2826 18.0338 13.1393 17.6341L19.5 26.013V32.9062H14.625V35.3438H26.8125V32.9062H21.9375V26.013L32.6783 11.845L32.9062 11.5026V9.75H16.7578C16.0205 6.9225 13.3868 4.875 10.3594 4.875ZM10.3594 7.3125C12.0534 7.3125 13.5159 8.33625 14.168 9.75H8.53125V11.5026L8.76038 11.8438L11.6159 15.6158C11.2128 15.7619 10.788 15.8389 10.3594 15.8438C9.79739 15.8503 9.23977 15.7444 8.71929 15.5324C8.19881 15.3203 7.72597 15.0063 7.32856 14.6089C6.93115 14.2115 6.61719 13.7387 6.40514 13.2182C6.19309 12.6977 6.08721 12.1401 6.09375 11.5781C6.08721 11.0161 6.19309 10.4585 6.40514 9.93804C6.61719 9.41756 6.93115 8.94472 7.32856 8.54731C7.72597 8.1499 8.19881 7.83594 8.71929 7.62389C9.23977 7.41184 9.79739 7.30596 10.3594 7.3125ZM12.1119 12.1875H29.3256L27.4974 14.625H16.4531L18.2812 17.0625H25.6315L20.7188 23.5755L12.1119 12.1875Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={featureClass}>
                <h1 className="text-white hidden group-hover:block text-center">
                  ROOM SERVICE
                </h1>
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:hidden"
                >
                  <path
                    d="M30.8425 27.625H3.25V30.875H35.75V27.625H30.8425ZM34.125 26C33.6863 19.3862 28.8438 13.975 22.49 12.6588C22.7001 12.1639 22.7846 11.6247 22.7359 11.0893C22.6871 10.5539 22.5068 10.0389 22.2108 9.59008C21.9148 9.14127 21.5124 8.77264 21.0394 8.51702C20.5665 8.2614 20.0376 8.12673 19.5 8.125C18.9624 8.12673 18.4335 8.2614 17.9606 8.51702C17.4876 8.77264 17.0852 9.14127 16.7892 9.59008C16.4932 10.0389 16.3129 10.5539 16.2641 11.0893C16.2154 11.6247 16.2999 12.1639 16.51 12.6588C10.1562 13.975 5.31375 19.3862 4.875 26H34.125ZM19.5 15.5675C24.2938 15.5675 28.3888 18.5413 30.0625 22.7337H8.9375C9.77977 20.6201 11.2364 18.8075 13.1192 17.53C15.0021 16.2526 17.2247 15.569 19.5 15.5675Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-start gap-4 md:gap-6 px-8 md:px-0 py-8 hidden">
        <div
          className={
            "p-2 font-bold border-2 md:border-4 border-white cursor-pointer " +
            (hotel === 0 ? "bg-black text-white" : "bg-white text-black")
          }
          onClick={() => PrevPage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[16px] sm:w-[28px] lg:w-[36px] h-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={
            "p-2 font-bold border-2 md:border-4 border-white cursor-pointer " +
            (hotel === PROPERTIES_DATA.length
              ? "bg-black text-white"
              : "bg-white text-black")
          }
          onClick={() => nextPage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[16px] sm:w-[28px] lg:w-[36px] h-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
