import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const [dateOpen, setDateOpen] = useState(false);
  const dateDialogRef = useRef(null);
  const [activeField, setActiveField] = useState(null); // 'checkIn' | 'checkOut'
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [tempDate, setTempDate] = useState("");

  function formatDate(dateStr) {
    if (!dateStr) return "";
    return dateStr;
  }

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (dateDialogRef.current && !dateDialogRef.current.contains(event.target)) {
        setDateOpen(false);
      }
    }
    if (dateOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dateOpen]);

  function openDatePicker(field) {
    setActiveField(field);
    const current = field === "checkIn" ? checkInDate : checkOutDate;
    setTempDate(current || new Date().toISOString().slice(0, 10));
    setDateOpen(true);
  }

  function saveDate() {
    if (activeField === "checkIn") {
      setCheckInDate(tempDate);
    } else if (activeField === "checkOut") {
      setCheckOutDate(tempDate);
    }
    setDateOpen(false);
  }

  return (
    <div className="flex relative justify-center">
      <div className="hidden lg:flex bg-white absolute -top-14 py-8 px-20 rounded-md shadow-sm/20">
        <div className="flex flex-[1] items-center px-8 border-r-[0.5px] border-[#9E9E9E] text-nowrap">
          <p>Room</p>
          <FaCaretDown className="ml-2 text-[#106A64]" />
        </div>
        <button onClick={() => openDatePicker("checkIn")} className="flex flex-[1] items-center px-8 border-r-[0.5px] border-[#9E9E9E] text-nowrap hover:bg-[#F7F7F7] rounded-none">
          <p>{formatDate(checkInDate) || "Check in"}</p>
          <LuCalendarDays className="ml-2 text-[#106A64]" />
        </button>
        <button onClick={() => openDatePicker("checkOut")} className="flex flex-[1] items-center px-8 text-nowrap hover:bg-[#F7F7F7] rounded-none">
          <p>{formatDate(checkOutDate) || "Check out"}</p>
          <LuCalendarDays className="ml-2 text-[#106A64]" />
        </button>
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
          <button onClick={() => openDatePicker("checkIn")} className="flex flex-[1] hover:cursor-pointer items-center py-2 text-nowrap border-r-[0.5px] border-[#9E9E9E] hover:bg-[#F7F7F7]">
            <LuCalendarDays className="text-[#106A64] mr-2" />
            <p>{formatDate(checkInDate) || "Check in"}</p>
          </button>
          <button onClick={() => openDatePicker("checkOut")} className="flex flex-[1] hover:cursor-pointer items-center px-2 text-nowrap hover:bg-[#F7F7F7]">
            <LuCalendarDays className="text-[#106A64] mr-2" />
            <p>{formatDate(checkOutDate) || "Check out"}</p>
          </button>
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

      {dateOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            ref={dateDialogRef}
            className="bg-white rounded-lg shadow-lg w-80 p-6 relative"
          >
            <h2 className="text-2xl font-semibold text-black text-center">
              {activeField === "checkIn" ? "Select Check-in" : "Select Check-out"}
            </h2>
            <div className="mt-4">
              <input
                type="date"
                value={tempDate}
                onChange={(e) => setTempDate(e.target.value)}
                className="w-full border border-[#E5E5E5] rounded-md px-3 py-2 text-black"
              />
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setDateOpen(false)}
                className="px-4 py-2 flex-1 rounded-md border border-[#E5E5E5] text-[#106A64] hover:bg-[#F7F7F7] hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={saveDate}
                className="px-4 py-2 flex-1 rounded-md bg-[#106A64] text-white hover:opacity-80 hover:cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingActions;
