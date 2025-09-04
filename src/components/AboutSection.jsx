import React from "react";
import AboutImage from "../assets/images/about.png";
import Rectangle from "../assets/images/rectangle.png";

const AboutSection = () => {
  return (
    <section id="about" className="items-center px-[10vw] pb-32">
      <div className="w-full">
        <h2 className="text-[#0A0A0A] font-semibold text-4xl lg:py-[10vw] py-0 lg:mt-0 mt-[20vh] lg:mb-4 mb-6">
          About Villa <span className="text-[#106A64]">Amadaha</span>
        </h2>
      </div>
      <div className="lg:flex">
        <div className="relative flex-[2] items-center lg:pl-4">
          <img
            src={AboutImage}
            width="368px"
            alt=""
            className="lg:block absolute lg:-top-4 lg:left-0 lg:z-10 hidden"
          />
          <div className="w-full h-[34vh] bg-[url(./assets/images/about.png)] bg-center bg-cover lg:hidden"></div>
          <img src={Rectangle} alt="" className="lg:block hidden z-0" />
        </div>
        <div className="flex-[3] lg:px-12 py-4">
          <p className="text-[#0A0A0A] font-normal text-xl lg:mb-32 mb-10">
            Villa Amadaha consist of Two Luxury Villas and one Traditional
            Javanese House surrounded by a tranquil rain forest setting,
            traditional Indonesian houses anda a farm overlooking the area. 
          </p>
          <div className="flex">
            <div className="py-2 mr-16">
              <div className="mb-2 text-center">
                <p className="text-[#0A0A0A] text-4xl font-medium">
                  +6{" "}
                  <span className="text-[#106A64] text-2xl font-medium">
                    / Room
                  </span>
                </p>
              </div>
              <div className="text-[#0A0A0A] text-xl font-normal text-center">
                Room options
              </div>
            </div>
            <div className="py-2 mr-16">
              <div className="mb-2 text-center">
                <p className="text-[#0A0A0A] text-4xl font-medium">
                  +2{" "}
                  <span className="text-[#106A64] text-2xl font-medium">
                    / Facilities
                  </span>
                </p>
              </div>
              <div className="text-[#0A0A0A] text-xl font-normal text-center">
                Facilities Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
