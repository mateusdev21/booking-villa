import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const FloatingActions = () => {
  return (
    <div className="flex relative justify-center">
      <div className="flex bg-white absolute -top-14 py-8 px-20 rounded-md shadow-sm/20">
        <div className="flex flex-[1] items-center px-8 border-r-[0.5px] border-[#9E9E9E] text-nowrap">
          <p>Room</p>
          <FaCaretDown className="ml-2 text-[#106A64]" />
        </div>
        <div className="flex flex-[1] items-center px-8 border-r-[0.5px] border-[#9E9E9E] text-nowrap">
          <p>Check in</p>
          <LuCalendarDays className="ml-2 text-[#106A64]" />
        </div>
        <div className="flex flex-[1] items-center px-8 text-nowrap">
          <p>Check out</p>
          <LuCalendarDays className="ml-2 text-[#106A64]" />
        </div>
        <div className="flex flex-[1] items-center pr-8 pl-4 text-nowrap">
          <button className="py-2 px-8 bg-[#106A64] text-white rounded-md hover:opacity-80 hover:cursor-pointer">
            Check avability
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingActions;
