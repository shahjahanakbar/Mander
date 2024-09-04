import React from "react";
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#1b2a49]">
    
      <h1 className="heading text-white text-center text-[2rem] md:text-[3rem] font-bold">
        Made with <br /> Love and
        <span className="text-teal-600"> Passion</span>
      </h1>
      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* 1st card */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 rounded-lg bg-[#1b2a49] hover:bg-[#1b2a49] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <Image src={Img1} alt="Pakistani Dish" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-gray-200 font-semibold">
              Quality Food
            </h1>
            <p className="mt-[0.2rem] text-gray-300 text-opacity-90 text-center">
              We pride ourselves on serving high-quality food that reflects the rich traditions of Pakistani cuisine. Our dishes are crafted with the finest ingredients and prepared with care to deliver authentic flavors and exceptional taste.
            </p>
          </div>
        </div>
       
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 rounded-lg bg-[#1b2a49] hover:bg-[#1b2a49] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <Image src={Img2} alt="Pakistani Dish" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-gray-200 font-semibold">
              Peaceful Ambience
            </h1>
            <p className="mt-[0.2rem] text-gray-300 text-opacity-90 text-center">
              Our restaurant offers a tranquil atmosphere where you can enjoy your meal in comfort. The ambiance is designed to provide a serene dining experience, perfect for family gatherings and casual meals.
            </p>
          </div>
        </div>
      
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 rounded-lg bg-[#1b2a49] hover:bg-[#1b2a49] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <Image src={Img3} alt="Pakistani Dish" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-gray-200 font-semibold">
              Polite Staff
            </h1>
            <p className="mt-[0.2rem] text-gray-300 text-opacity-90 text-center">
              Our team is dedicated to providing exceptional service. From the moment you walk in, you&rsquo;ll experience the warmth and hospitality of our staff, who are committed to making your dining experience memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
