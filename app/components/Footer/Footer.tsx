import React from "react";
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[3rem] pb-[2rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        {/* 1st part */}
        <div>
          {/* logo */}
          <div className="flex items-center text-white space-x-2">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">
              Mander&apos;s
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem] leading-relaxed">
            Experience the best in local cuisine with Mander&apos;s. Our chefs are dedicated to bringing you an unforgettable dining experience.
          </p>
          <p className="mt-[1rem] text-white">shahjahanakabr10b@gmail.com</p>
          <p className="text-teal-300 text-[19px] font-bold">
            +(92) 300 1234567
          </p>
        </div>
        {/* 2nd part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Our Menu
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Chicken Chowmein
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Chicken Biryani
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Cheesy Pizza
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Chicken Tikka
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Wood Oven Pizza
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Steamed Dumplings
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Fruit Salad
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Wings with Fries and Nuggets
          </p>
        </div>
        {/* 3rd part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Quick Links
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Home
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            About
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Menu
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 hover:scale-105 transition-transform duration-200 cursor-pointer w-fit">
            Products
          </p>
        </div>
        {/* 4th part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] uppercase text-white">
            Opening Hours
          </h1>
          <p className="text-white text-[18px]">
            Monday - Friday: <span className="text-teal-300">4pm - 4am</span>
          </p>
          <p className="text-white text-[18px]">
            Saturday: <span className="text-teal-300">3pm - 2am</span>
          </p>
          {/* social icons */}
          <div className="flex mt-[2rem] items-center space-x-6">
            <FaFacebook className="w-[1.3rem] h-[1.3rem] text-blue-400" />
            <FaInstagram className="w-[1.3rem] h-[1.3rem] text-red-400" />
            <FaTwitter className="w-[1.3rem] h-[1.3rem] text-blue-300" />
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-4">
        <p>&copy; {new Date().getFullYear()} Shahjahan Akbar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
