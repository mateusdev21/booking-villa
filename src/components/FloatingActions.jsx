import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex relative justify-center">
      <div className="hidden lg:flex bg-white absolute -top-14 py-8 px-20 rounded-md shadow-sm/20">
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
          <button
            onClick={() => setOpen(true)}
            className="py-2 px-8 bg-[#106A64] text-white rounded-md hover:opacity-80 hover:cursor-pointer"
          >
            Check avability
          </button>
        </div>
      </div>

      <div className="block lg:hidden bg-white absolute -top-14 shadow-sm/20 w-[90vw]">
        <div className="flex items-center px-4 py-2 text-nowrap">
          <p>Room</p>
          <FaCaretDown className="ml-2 text-[#106A64]" />
        </div>
        <hr className="text-[#9E9E9E]" />
        <div className="flex px-4 py-2">
          <div className="flex flex-[1] items-center py-2 text-nowrap border-r-[0.5px] border-[#9E9E9E]">
            <LuCalendarDays className="text-[#106A64] mr-2" />
            <p>Check in</p>
          </div>
          <div className="flex flex-[1] items-center px-2 text-nowrap">
            <LuCalendarDays className="text-[#106A64] mr-2" />
            <p>Check out</p>
          </div>
        </div>
        <div className="flex p-0 items-center text-nowrap">
          <button
            onClick={() => setOpen(true)}
            className="py-2 px-8 bg-[#106A64] text-white hover:opacity-80 hover:cursor-pointer w-[100%]"
          >
            Check avability
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            ref={dialogRef}
            className="bg-white rounded-lg shadow-lg w-80 p-6 relative"
          >
            <h2 className="text-2xl font-semibold text-black text-center">
              Available
            </h2>
            <p className="mt-2 text-[#777777] text-center text-xs">
              ROOM on START_DATE until END_DATE is available
            </p>

            <div className="mt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 min-w-[100%] rounded-md bg-[#106A64] text-white text-sm hover:opacity-80 hover:cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingActions;
