import { PROPERTIES_DATA, ROOMS_DATA } from "@/constants/constants";
import React, { useState } from "react";
import SimpleSlider from "../Misc/SimpleSlider";
import Image from "next/image";

export default function Results({ suite }) {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [guests, setGuests] = useState();
  const [noOfRooms, setNoOfRooms] = useState(0);
  const [noOfAdults, setNoOfAdults] = useState(0);

  function handleCheckIn(event) {
    setCheckIn(event.target.value);
  }

  function handleCheckOut(event) {
    setCheckOut(event.target.value);
  }

  function handleGuests(event) {
    setGuests(event.target.value);
  }
  // function callFun(){
  //     console.log(guests);
  // }
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
    <div className="bg-[#F0F0F0] px-10 py-20">
      <h2 className="text-5xl lg:text-7xl font-bold">{PROPERTIES_DATA[0].title}</h2>
      <div className="px-6 py-6 w-auto md:w-fit bg-white rounded-3xl flex md:flex-row flex-col my-10 justify-center items-center">
        <div className="px-4 flex items-center border-b-2 md:border-r-2 md:border-b-0 border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <div className="flex flex-col px-2">
            <label htmlFor="check-in" className="font-semibold text-2xl">
              Check-in Date
            </label>
            <input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={handleCheckIn}
            />
          </div>
        </div>
        <div className="px-4 flex items-center border-b-2 md:border-r-2 md:border-b-0 border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <div className="flex flex-col px-2">
            <label htmlFor="check-out" className="font-semibold text-2xl">
              Check-out Date
            </label>
            <input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={handleCheckOut}
            />
          </div>
        </div>
        <div className="px-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          <div className="flex flex-col px-2">
            <label htmlFor="adults" className="font-semibold text-2xl">
              Adult
            </label>
            <input
              type="number"
              id="adults"
              placeholder="- Add Guest +"
              value={guests}
              onChange={handleGuests}
            />
          </div>
        </div>
      </div>
      <div>
        {ROOMS_DATA.map((room) => (
          <div className="bg-[#D9D9D9] rounded-3xl p-6 sm:p-10 flex md:flex-row flex-col justify-between my-10">
            <div className="w-full md:w-1/3">
              <SimpleSlider
                dots={true}
                noOfSlides={1}
                autoPlay={false}
                infinite={false}
                arrows={true}
              >
                {room.images.map((t) => (
                  <div className="relative w-[200px] h-[300px]">
                    <Image
                      src={t}
                      className="object-cover rounded-3xl"
                      fill
                    ></Image>
                  </div>
                ))}
              </SimpleSlider>
            </div>
            <div className="px-10 py-10 md:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl pb-6">{room.title}</h3>
                {room.description.map((t) => (
                  <p className="text-sm font-medium">{t}</p>
                ))}
              </div>
              <div className="pt-6">{room.amenities}</div>
            </div>
            <div className="md:w-1/3 flex md:flex-row flex-col justify-between">
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="flex flex-col items-center pb-2 md:pb-10">
                  <p>Select number of rooms</p>
                  <div className="flex">
                    <button
                      className="rounded-full border border-black w-10 h-10 flex items-center justify-center text-3xl"
                      onClick={decreaseRooms}
                    >
                      -
                    </button>
                    <p className="font-bold text-3xl px-4">{noOfRooms}</p>
                    <button
                      className="rounded-full border border-black w-10 h-10 flex items-center justify-center text-3xl"
                      onClick={increaseRooms}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p>Select number of adults</p>
                  <div className="flex">
                    <button
                      className="rounded-full border border-black w-10 h-10 flex items-center justify-center text-3xl"
                      onClick={decreaseAdults}
                    >
                      -
                    </button>
                    <p className="font-bold text-3xl px-4">{noOfAdults}</p>
                    <button
                      className="rounded-full border border-black w-10 h-10 flex items-center justify-center text-3xl"
                      onClick={increaseAdults}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col items-center justify-center pt-10">
                <h4 className="text-3xl pb-6">USD {noOfRooms * room.rate}</h4>
                <p className="pb-2">USD {room.rate} per/night</p>
                <button className="border-2 border-black p-2 rounded-2xl font-bold w-fit">
                  RESERVE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
