"use client";
import Image from "next/image";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

interface Props {
  title: string;
  image: string;
  price: string;
  reviews: string;
}

const BurgerCard = ({ image, price, reviews, title }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 m-3">
      {/* Image div */}
      <div className="w-[200px] mx-auto h-[200px]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Title */}
      <h1 className="mt-4 text-xl text-gray-900 font-semibold">{title}</h1>
      <div className="flex items-center mt-2 space-x-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="w-4 h-4 text-yellow-500" />
          ))}
        </div>
        <div className="text-gray-600">({reviews})</div>
      </div>
      <p className="mt-2 text-gray-700">
        A delicious and juicy burger packed with flavor.
      </p>
      <div className="flex mt-4 items-center justify-between">
        <h1 className="text-2xl font-bold text-red-600">{price}</h1>
        <button className="px-4 py-2 bg-green-600 hover:bg-green-700 transition-all duration-200 text-white flex items-center rounded-md">
          <BiShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;
