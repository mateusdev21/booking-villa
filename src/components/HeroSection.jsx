import React from "react";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex items-center px-[8vw] bg-[url(./assets/images/hero-bg.png)] bg-cover min-h-[120vh]">
      <div className="container p-6 align-center">
        <h1 className="text-4xl font-bold text-white mb-4 xl:text-left text-center">
          Make your comfort is <br />
          our happines
        </h1>
        <p className="text-lg text-white font-light mb-6 xl:text-left text-center">
          Studio villa made of bamboo, located near the top of Mount Geulis{" "}
          <br />
          with a stunning 180 degree bird's eye view.
        </p>
        <div className="flex justify-center xl:hidden mb-8">
          <button className="py-3 px-18 lg:px-9 xl:rounded-md bg-[#106A64] text-white hover:cursor-pointer">
            Login
          </button>
        </div>
        <div className="flex justify-center xl:justify-start">
          <button
            onClick={() => scrollToSection("pricing")}
            className="py-3 px-9 xl:rounded-md bg-[#F1F6F6] text-[#106A64] hover:cursor-pointer"
          >
            Explore Rooms
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
