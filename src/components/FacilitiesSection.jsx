import React from "react";
import Facilities1 from "../assets/images/facilities1.png";
import Facilities2 from "../assets/images/facilities2.png";
import Rectangle2 from "../assets/images/rectangle2.png";

const FacilitiesSection = () => {
  return (
    <section className="items-center px-[10vw] pb-32 pt-8">
      <div className="lg:flex relative">
        <div className="flex-[1.5] items-center py-4 px-8 z-10">
          <h2 className="text-[#0A0A0A] text-center lg:text-left font-semibold text-4xl mb-6">
            Various <span className="text-[#106A64]">Facilities</span> that you
            can enjoy
          </h2>
          <p className="text-xl text-[#9E9E9E] mb-6 text-center lg:text-left">
            We bring you together with your dream holiday
          </p>
          <button className="py-2 px-8 bg-[#106A64] text-white hidden lg:block rounded-md hover:opacity-80 hover:cursor-pointer">
            Explore
          </button>
        </div>
        <div className="flex mb-6">
          <div className="flex-[1] p-4 z-10">
            <img src={Facilities1} alt="" />
          </div>
          <div className="flex-[1] p-4 z-10">
            <img src={Facilities2} alt="" />
          </div>
        </div>
        <div className="lg:hidden flex lg:justify-start justify-center">
          <button className="py-2 px-8 bg-[#106A64] text-white hover:opacity-80 hover:cursor-pointer">
            Explore
          </button>
        </div>
        <img
          src={Rectangle2}
          alt=""
          width={576}
          className="absolute -right-34 -bottom-20 z-0 hidden lg:block"
        />
      </div>
    </section>
  );
};

export default FacilitiesSection;
