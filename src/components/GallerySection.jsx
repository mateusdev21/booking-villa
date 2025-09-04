import React from "react";
import Gallery1 from "../assets/images/gallery1.png";
import Gallery2 from "../assets/images/gallery2.png";
import Gallery3 from "../assets/images/gallery3.png";

const GallerySection = () => {
  return (
    <section id="gallery" className="items-center px-[12vw] pb-32 pt-8">
      <div className="w-full mb-12">
        <h2 className="text-[#0A0A0A] font-semibold text-4xl text-center">
          Our <span className="text-[#106A64]">Gallery</span>
        </h2>
      </div>
      <div className="flex">
        <div className="flex-[1] mr-6 flex relative items-center justify-center hover:cursor-pointer">
          <div className="hover:bg-black flex opacity-40 z-10 w-[100%] h-[100%] absolute"></div>
          <img src={Gallery1} alt="" className="z-0" />
        </div>
        <div className="flex-[1]">
          <div className="mb-4 flex relative items-center justify-center hover:cursor-pointer">
            <div className="hover:bg-black flex opacity-40 z-10 w-[100%] h-[100%] absolute"></div>
            <img src={Gallery2} alt="" className="z-0" />
          </div>
          <div className="flex relative items-center justify-center hover:cursor-pointer">
            <p className="absolute text-white text-center z-20 underline underline-offset-1">
              More Photos
            </p>
            <div className="hover:bg-black flex opacity-40 z-10 w-[100%] h-[100%] absolute"></div>
            <img src={Gallery3} alt="" className="z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
