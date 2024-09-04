import Link from "next/link";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <IoFastFoodSharp className="w-[1.4rem] h-[1.4rem] sm:w-[1.6rem] sm:h-[1.6rem] text-teal-400" />
          <h1 className="text-[24px] sm:text-[32px] font-bold text-white">
            Mander&apos;s
          </h1>
        </div>
        {/* Nav links */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li className="text-[18px] font-medium text-gray-200 hover:text-teal-300 transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[18px] font-medium text-gray-200 hover:text-teal-300 transition-colors duration-300">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-[18px] font-medium text-gray-200 hover:text-teal-300 transition-colors duration-300">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="text-[18px] font-medium text-gray-200 hover:text-teal-300 transition-colors duration-300">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-[18px] font-medium text-gray-200 hover:text-teal-300 transition-colors duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-teal-500 transition-all duration-300 hover:bg-teal-400 flex items-center rounded-md space-x-2 text-white">
            <TbTruckDelivery className="w-[1.5rem] h-[1.5rem] sm:w-[1.8rem] sm:h-[1.8rem]" />
            <span className="font-bold">Order Now</span>
          </button>
          <button className="sm:px-6 sm:py-3 px-4 py-2 bg-gray-600 hover:bg-gray-500 transition-all duration-300 flex items-center rounded-md text-white">
            <FaShoppingCart className="w-[1.5rem] h-[1.5rem] sm:w-[1.8rem] sm:h-[1.8rem]" />
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden w-[2rem] h-[2rem] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
