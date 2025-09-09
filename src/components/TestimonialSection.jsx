import React, { useState } from "react";
import Client1 from "../assets/images/client1.png";
import Client2 from "../assets/images/client2.png";
import Client3 from "../assets/images/client3.png";
import Quote from "../assets/images/quote.png";
import Ellipse from "../assets/images/ellipse.png";

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleSlides = 3;

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - visibleSlides : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= testimonials.length - visibleSlides ? 0 : prev + 1
    );
  };

  const testimonials = [
    {
      name: "Phillip Press",
      role: "Traveler",
      image: Client1,
      feedback:
        "“The place is nice with a village atmosphere surrounded by trees, really cool”",
    },
    {
      name: "Tatiana Levin",
      role: "Travel Bloger",
      image: Client2,
      feedback:
        "“The rooms are okay, the breakfast is okay, new and traditional menus are added”",
    },
    {
      name: "Kaiya Vaccaro",
      role: "Digital Nomads",
      image: Client3,
      feedback:
        "“strategic location, very pleasant at this villa. next time will come back again to spend the night here”",
    },
    {
      name: "Kaiya Vaccaro",
      role: "Digital Nomads",
      image: Client3,
      feedback:
        "“strategic location, very pleasant at this villa. next time will come back again to spend the night here”",
    },
  ];

  return (
    <section className="items-center px-[10vw] pb-32">
      <div className="relative w-full px-20">
        <img src={Ellipse} alt="" className="absolute -top-5 left-0 z-0" />
        <img src={Quote} alt="" className="absolute top-7 left-12 z-10" />
        <h2 className="text-[#0A0A0A] font-semibold text-4xl/12 py-[10vh] relative z-20">
          What Our <span className="text-[#106A64]">Customer</span>
          <br />
          Are Saying
        </h2>
      </div>

      <div className="relative w-full max-w-4xl mx-16">
        {/* Wrapper */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(100 / visibleSlides) * current}%)`,
            }}
          >
            {testimonials.map((data, i) => (
              <div className="flex-[1] min-w-[33.6%]" key={i}>
                <div className="bg-white m-2 py-8 px-4 shadow-xs/20">
                  <p className="text-sm mb-10">{data.feedback}</p>
                  <div className="flex">
                    <img src={data.image} alt="" />
                    <div className="ml-4">
                      <p className="text-xs font-medium text-[#106A64] mb-1">
                        {data.name}
                      </p>
                      <p className="text-[0.6rem] text-[#9E9E9E]">
                        {data.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol kiri */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ◀
        </button>

        {/* Tombol kanan */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ▶
        </button>
      </div>
      {/* <div className="flex mb-8">
        <div className="flex-[1]">
          <div className="bg-white m-2 py-8 px-4 shadow-xs/20">
            <p className="text-sm mb-10">
              “The place is nice with a village atmosphere surrounded by trees,
              really cool”
            </p>
            <div className="flex">
              <img src={Client1} alt="" />
              <div className="ml-4">
                <p className="text-xs font-medium text-[#106A64] mb-1">
                  Phillip Press
                </p>
                <p className="text-[0.6rem] text-[#9E9E9E]">Traveler</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1]">
          <div className="bg-white m-2 py-8 px-4 shadow-xs/20">
            <p className="text-sm mb-10">
              “The rooms are okay, the breakfast is okay, new and traditional
              menus are added”
            </p>
            <div className="flex">
              <img src={Client2} alt="" />
              <div className="ml-4">
                <p className="text-xs font-medium text-[#106A64] mb-1">
                  Tatiana Levin
                </p>
                <p className="text-[0.6rem] text-[#9E9E9E]">Travel Bloger</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1]">
          <div className="bg-white m-2 py-8 px-4 shadow-xs/20">
            <p className="text-sm mb-5">
              “strategic location, very pleasant at this villa. next time will
              come back again to spend the night here”
            </p>
            <div className="flex">
              <img src={Client3} alt="" />
              <div className="ml-4">
                <p className="text-xs font-medium text-[#106A64] mb-1">
                  Kaiya Vaccaro
                </p>
                <p className="text-[0.6rem] text-[#9E9E9E]">Digital Nomads</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default TestimonialSection;
