import React from "react";
import Lottie from "react-lottie-player";
import deliveryAnimation from "@/public/animations/delivery.json";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* Lottie Animation */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Lottie
            loop
            animationData={deliveryAnimation}
            play
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* Text Content */}
        <div>
          <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-teal-600">Favorite Pakistani Delicacies</span> Delivered
            Hot and Fresh
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Savor the authentic taste of Pakistan with our extensive menu. From spicy kebabs to rich biryanis, our chefs prepare each dish with the finest ingredients to bring you an unforgettable culinary experience right at your doorstep.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <TbTruckDelivery className="w-[2rem] h-[2rem] text-teal-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 minutes
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFoodSharp className="w-[2rem] h-[2rem] text-teal-600" />
            <h1 className="text-[18px] text-black font-medium">
              Free delivery on orders over 2000 PKR
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoHomeSharp className="w-[2rem] h-[2rem] text-teal-600" />
            <h1 className="text-[18px] text-black font-medium">
              Hot and Fresh, Delivered to Your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
