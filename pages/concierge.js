import React, { useState } from "react";
import { CONCIERGE } from "@/constants/constants";
import Layout from "@/components/Layout/Layout";

export default function Concierge() {
  const [services, setServices] = useState(0);
  const [bgImage, setBgImage] = useState("image1.jpg");
  const buttonStyle =
    "h-fit rounded-2xl bg-[#d7a55a] text-black items-center font-semibold text-xs se:md py-2 px-4 w-fit cursor-pointer m-2 hover:bg-[#c57600] whitespace-nowrap";

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   setServices(event.target.value);
  // };
  return (
    <Layout>
      <div
        className="h-[100vh] bg-cover bg-center flex flex-col justify-between py-10  md:p-10 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),linear-gradient(to top, rgba(0,0,0,0) 80%, rgba(0,0,0,1)),url(/slider/${bgImage})`,
        }}
      >
        <div className="text-center text-white flex flex-col relative top-1/2 md:top-20">
          <h3 className="text-3xl se:text-5xl md:text-8xl font-italiana mb-4">
            {CONCIERGE[services].title}
          </h3>
          <p className="text-md mb-4">
            Luxuri prides itself on complete discretion when it comes to our
            clients.
          </p>
        </div>
        {/* <div className="">
        <select value={CONCIERGE[services]} onChange={handleChange}>
          {CONCIERGE.map((option,index) => (
            <option key={option.value} value={index}>
              {option.title}
            </option>
          ))}
        </select>
      </div> */}
        <div className="flex justify-between overflow-x-scroll px-2 no-scrollbar">
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(0);
              setBgImage("image1.jpg");
            }}
          >
            IN-HOUSE GOURMET CHEF
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(1);
              setBgImage("image3.jpg");
            }}
          >
            YATCH CHARTER
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(2);
              setBgImage("image2.jpg");
            }}
          >
            PRIVATE JET
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(3);
              setBgImage("image4.jpg");
            }}
          >
            PRIVATE DRIVER
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(4);
              setBgImage("image5.jpg");
            }}
          >
            IN-HOUSE MASSAGE
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(5);
              setBgImage("image6.jpg");
            }}
          >
            RESTAURANT ACCESS
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(6);
              setBgImage("image7.jpg");
            }}
          >
            EXCLUSIVE EVENT ACCESS
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(7);
              setBgImage("image8.jpg");
            }}
          >
            IN-HOUSE FACIALS
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(8);
              setBgImage("image9.jpg");
            }}
          >
            EVENT PLANNER
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(9);
              setBgImage("image10.jpg");
            }}
          >
            DAILY CLEANING
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(10);
              setBgImage("image11.jpg");
            }}
          >
            HELI SKIING
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(11);
              setBgImage("image12.jpg");
            }}
          >
            AIRPORT TRANSFER
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(12);
              setBgImage("image13.jpg");
            }}
          >
            PHOTOGRAPHER
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(13);
              setBgImage("image14.jpg");
            }}
          >
            NIGHTCLUB/LOUNGE ACCESS
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(14);
              setBgImage("image15.jpg");
            }}
          >
            PERSONAL SHOPPER
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(15);
              setBgImage("image16.jpg");
            }}
          >
            SPRINTER SERVICES
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(16);
              setBgImage("image17.jpg");
            }}
          >
            PRIVATE SECURITY
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(17);
              setBgImage("image18.jpg");
            }}
          >
            BABY SITTER / NANNY
          </button>
          <button
            className={buttonStyle}
            onClick={() => {
              setServices(18);
              setBgImage("image19.jpg");
            }}
          >
            JET SKI RENTALS
          </button>
        </div>
      </div>
    </Layout>
  );
}
