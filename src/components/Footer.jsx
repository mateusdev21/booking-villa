import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="flex py-36 px-[10vw] bg-[url(./assets/images/footer.png)] bg-cover bg-center min-h-[80vh]">
        <div className="container p-6">
          <h1 className="text-4xl font-bold text-white mb-8 text-center xl:text-left">
            Make your comfort is <br />
            our happines
          </h1>
          <div className="flex">
            <button className="py-3 px-9 mx-auto lg:mx-0 rounded-md bg-[#F1F6F6] text-[#106A64] hover:cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex py-8 px-[12vw]">
        <div className="flex-[2]">
          <p className="mb-6 text-2xl font-medium">Quick Links</p>
          <ul>
            <li className="mb-2 text-xl">
              <a href="">About</a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">Facility</a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">Gallery</a>
            </li>
          </ul>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-2xl font-medium">Room Categorys</p>
          <ul>
            <li className="mb-2 text-xl">
              <a href="">4 Bedroom Villa</a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">2 Bedroom Villa</a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">Joglo House</a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">Bamboo Studio</a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">Bamboo House</a>
            </li>
          </ul>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-2xl font-medium">Contact Us</p>
          <ul className="flex lg:block">
            <li className="mb-2 text-xl">
              <a href="">
                <div className="flex">
                  <FaLocationDot className="mr-4 text-md" />
                  <p className="hidden lg:block">
                    Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa
                    Barat
                  </p>
                </div>
              </a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">
                <div className="flex items-center">
                  <FaPhone className="mr-4 text-sm align-middle" />
                  <p className="hidden lg:block">+ 62812345678</p>
                </div>
              </a>
            </li>
            <li className="mb-2 text-xl">
              <a href="">
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 text-sm" />
                  <p className="hidden lg:block">example@gmail.com</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
