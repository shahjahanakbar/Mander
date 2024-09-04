"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroImg1 from "@/public/images/b1.png";
import HeroImg2 from "@/public/images/b2.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
    >
      {/* 1st slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-gray-100">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* Image */}
          <Image src={HeroImg1} alt="Atmospheric view" className="hidden md:block" />
          {/* Information */}
          <div>
            <h1 className="text-[40px] font-semibold text-gray-800">
              Welcome to a Place of
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-black font-bold">
              Distinction
            </h1>
            <p className="mt-[1rem] text-gray-600 text-[18px]">
              Where exceptional experiences meet unparalleled comfort. Discover the essence of quality and style with us.
            </p>
            <button className="mt-[2rem] px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Discover More</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2nd slide */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-gray-200">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          {/* Image */}
          <Image src={HeroImg2} alt="Atmospheric view" className="hidden md:block" />
          {/* Information */}
          <div>
            <h1 className="text-[40px] font-semibold text-gray-800">
              Embrace the
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-black font-bold">
              Exceptional
            </h1>
            <p className="mt-[1rem] text-gray-600 text-[18px]">
              Elevate your senses with our unique blend of comfort and elegance. Experience a setting designed for your delight.
            </p>
            <button className="mt-[2rem] px-8 py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
