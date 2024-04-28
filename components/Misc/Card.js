import React, { useState } from "react";
import SimpleSlider from "./SimpleSlider";
import Image from "next/image";

export default function Card({ room }) {
  const [noOfRooms, setNoOfRooms] = useState(0);
  const [noOfAdults, setNoOfAdults] = useState(0);

  function increaseAdults() {
    setNoOfAdults(noOfAdults + 1);
  }
  function decreaseAdults() {
    if (noOfAdults != 0) {
      setNoOfAdults(noOfAdults - 1);
    }
  }
  function increaseRooms() {
    setNoOfRooms(noOfRooms + 1);
  }
  function decreaseRooms() {
    if (noOfRooms != 0) {
      setNoOfRooms(noOfRooms - 1);
    }
  }
  return (
    <div
      className="bg-[#D9D9D9] rounded-3xl p-6 sm:p-10 flex md:flex-row flex-col justify-between my-10 shadow-md"
    >
      <div className="w-full md:w-1/3">
        <SimpleSlider
          dots={true}
          noOfSlides={1}
          autoPlay={false}
          infinite={false}
          arrows={true}
        >
          {room.images.map((t) => (
            <div className="relative w-[200px] h-[300px]" key={t}>
              <Image
                src={t}
                className="object-cover rounded-3xl"
                fill
                alt=""
              ></Image>
            </div>
          ))}
        </SimpleSlider>
      </div>
      <div className="md:px-10 py-10 md:w-1/3 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl pb-6">{room.title}</h3>
          {room.description.map((t) => (
            <p className="text-sm font-medium" key={t}>
              {t}
            </p>
          ))}
        </div>
        <div className="pt-6">{room.amenities}</div>
      </div>
      <div className="md:w-1/3 flex  justify-between">
        <div className="md:w-1/2 flex flex-col justify-between sm:justify-center">
          <div className="flex flex-col sm:items-center pb-2 md:pb-10">
            <p className="text-sm sm:text-md">Select number of rooms</p>
            <div className="flex">
              <button
                className="rounded-full border p-auto border-black w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center sm:text-3xl"
                onClick={decreaseRooms}
              >
                -
              </button>
              <p className="font-bold sm:text-3xl px-4">{noOfRooms}</p>
              <button
                className="rounded-full border p-auto border-black w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center sm:text-3xl"
                onClick={increaseRooms}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:items-center">
            <p className="text-sm sm:text-md">Select number of adults</p>
            <div className="flex">
              <button
                className="rounded-full border p-auto border-black w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center sm:text-3xl"
                onClick={decreaseAdults}
              >
                -
              </button>
              <p className="font-bold sm:text-3xl px-4">{noOfAdults}</p>
              <button
                className="rounded-full border p-auto border-black w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center sm:text-3xl"
                onClick={increaseAdults}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center md:pt-10 px-4">
          <h4 className="text-xl font-bold sm:text-3xl pb-6">
            USD {noOfRooms * room.rate}
          </h4>
          <p className="pb-2 text-md sm:text-xl text-center">
            USD {room.rate} per/night
          </p>
          <button className="border-2 border-black p-2 rounded-2xl font-bold w-fit">
            RESERVE
          </button>
        </div>
      </div>
    </div>
  );
}
