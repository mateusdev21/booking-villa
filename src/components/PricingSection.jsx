import React from "react";
import Card1 from "../assets/images/card1.png";
import Card2 from "../assets/images/card2.png";
import Card3 from "../assets/images/card3.png";
import BedIcon from "../assets/bed.svg";
import { LuUsers } from "react-icons/lu";
import { FaBed } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="items-center px-[10vw] pb-24 pt-8">
      <div className="w-full mb-8">
        <h2 className="text-[#0A0A0A] font-semibold text-4xl text-center">
          Our Choise of <span className="text-[#106A64]">Villa Studios</span>
        </h2>
      </div>
      <div className="flex mb-8">
        <div className="flex-[1]">
          <div className="bg-white m-4 p-4 rounded-md shadow-xs/20 hover:cursor-pointer">
            <div className="mb-4">
              <img src={Card1} width="368px" alt="" />
            </div>
            <p className="text-[#106A64] font-medium mb-2">4 Bedroom villa</p>
            <div className="flex mb-4">
              <div className="flex-[2] mr-6">
                <p className="text-xs mb-8">Main Facilities</p>
                <div className="flex">
                  <FaBed className="mr-2 text-[#616161] " />
                  <p className="text-[#616161] text-xs">4 Bed</p>
                </div>
              </div>
              <div className="flex-[3]">
                <p className="text-xs mb-4">
                  Wifi provide, TV & Karaoke, Kitchen, Swimming pool
                </p>
                <div className="flex">
                  <LuUsers className="mr-2 text-[#616161] " />
                  <p className="text-[#616161] text-xs">8 Persons</p>
                </div>
              </div>
            </div>
            <p className="text-[#106A64] text-xl font-medium">
              Rp 3.749.000{" "}
              <span className="text-[#616161] text-sm font-normal">/night</span>
            </p>
          </div>
        </div>
        <div className="flex-[1]">
          <div className="bg-[#106A64] m-4 p-4 rounded-md shadow-xs/20 hover:cursor-pointer">
            <div className="mb-4">
              <img src={Card2} width="368px" alt="" />
            </div>
            <p className="text-white font-medium mb-2">Joglo House</p>
            <div className="flex mb-4">
              <div className="flex-[2] mr-6">
                <p className="text-xs mb-8 text-white">Main Facilities</p>
                <div className="flex">
                  <FaBed className="mr-2 text-white" />
                  <p className="text-white text-xs">4 Bed</p>
                </div>
              </div>
              <div className="flex-[3]">
                <p className="text-xs mb-4 text-white">
                  Wifi provide, TV & Karaoke, Kitchen, Swimming pool
                </p>
                <div className="flex">
                  <LuUsers className="mr-2 text-white" />
                  <p className="text-white text-xs">4 Persons</p>
                </div>
              </div>
            </div>
            <p className="text-white text-xl font-medium">
              Rp 3.749.000{" "}
              <span className="text-white text-sm font-normal">/night</span>
            </p>
          </div>
        </div>
        <div className="flex-[1] lg:block hidden">
          <div className="bg-white m-4 p-4 rounded-md shadow-xs/20 hover:cursor-pointer">
            <div className="mb-4">
              <img src={Card3} width="368px" alt="" />
            </div>
            <p className="text-[#106A64] font-medium mb-2">Kudus House</p>
            <div className="flex mb-4">
              <div className="flex-[2] mr-6">
                <p className="text-xs mb-8">Main Facilities</p>
                <div className="flex">
                  <FaBed className="mr-2 text-[#616161]" />
                  <p className="text-[#616161] text-xs">4 Bed</p>
                </div>
              </div>
              <div className="flex-[3]">
                <p className="text-xs mb-4">
                  Wifi provide, TV & Karaoke, Kitchen
                </p>
                <div className="flex">
                  <LuUsers className="mr-2 text-[#616161] " />
                  <p className="text-[#616161] text-xs">4 Persons</p>
                </div>
              </div>
            </div>
            <p className="text-[#106A64] text-xl font-medium">
              Rp 3.999.000{" "}
              <span className="text-[#616161] text-sm font-normal">/night</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <button className="bg-[#F1F6F6] text-[#106A64] py-3 px-9 rounded-md hover:cursor-pointer">
          Load More
        </button>
      </div>
    </section>
  );
};

export default PricingSection;
