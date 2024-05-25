import { PROPERTIES_DATA, ROOMS_DATA } from "@/constants/constants";
import React, { useState } from "react";
import Card from "../Misc/Card";

export default function Results({ suite }) {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [guests, setGuests] = useState();
  function handleCheckIn(event) {
    setCheckIn(event.target.value);
  }

  function handleCheckOut(event) {
    setCheckOut(event.target.value);
  }

  function handleGuests(event) {
    setGuests(event.target.value);
  }

  return (
    <div className="bg-[#F0F0F0] px-10 pt-10">
      <h2 className="text-4xl lg:text-7xl font-bold">{PROPERTIES_DATA[suite].title}</h2>
      <div className="px-2 py-6 w-auto lg:w-1/2 bg-white rounded-3xl flex md:flex-row my-10 justify-center items-center shadow-lg">
        <div className="w-full md:w-1/2 sm:px-4 flex items-center justify-center py-2 border-r-2 border-black">
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
          <div className="flex flex-col sm:px-2">
            <label htmlFor="check-in" className="font-semibold text-md se:text-lg md:text-2xl">
              Check-in Date
            </label>
            <input
              type="date"
              className="w-[70px] sm:w-[140px]"
              id="check-in"
              value={checkIn}
              onChange={handleCheckIn}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 sm:px-4 flex items-center justify-center py-2 ">
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
          <div className="flex flex-col sm:px-2">
            <label htmlFor="check-out" className="font-semibold text-md se:text-lg md:text-2xl">
              Check-out Date
            </label>
            <input
              type="date"
              id="check-out"
              className="w-[70px] sm:w-[140px]"
              value={checkOut}
              onChange={handleCheckOut}
            />
          </div>
        </div>
        {/* <div className="w-full md:w-1/3 sm:px-4 flex items-center py-2 justify-center">
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
          <div className="flex flex-col sm:px-2">
            <label htmlFor="adults" className="font-semibold text-md se:text-lg md:text-2xl">
              Adult
            </label>
            <input
              type="number"
              id="adults"
              className="w-[50px] se:w-[80px] md:w-[120px]"
              placeholder="- Add Guest +"
              value={guests}
              onChange={handleGuests}
            />
          </div>
        </div> */}
      </div>
      <div>
        {ROOMS_DATA.map((room) => (
            <Card room={room} key={room.title}></Card>
        ))}
      </div>
    </div>
  );
}
