"use client";
import React from "react";
import BurgerCard from "./BurgerCard";

const PopularBurger = () => {
  return (
    <div className="pt-12 pb-12 bg-gray-50">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
        Our Popular <span className="text-teal-600">Burgers</span>
      </h1>
      <div className="w-4/5 mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <BurgerCard
          title="Chicken Chowmein"
          image="/images/b1.png"
          reviews="6"
          price="2,500 PKR"
        />
        <BurgerCard
          title="Chicken Biryani"
          image="/images/b2.png"
          reviews="8"
          price="3,000 PKR"
        />
        <BurgerCard
          title="Cheesy Pizza"
          image="/images/b3.png"
          reviews="10"
          price="2,800 PKR"
        />
        <BurgerCard
          title="Chicken Tikka"
          image="/images/b4.png"
          reviews="5"
          price="1,000 PKR"
        />
        <BurgerCard
          title="Wood Oven Pizza"
          image="/images/b5.png"
          reviews="7"
          price="2,600 PKR"
        />
        <BurgerCard
          title="Steamed Dumplings"
          image="/images/b6.png"
          reviews="12"
          price="500 PKR"
        />
        <BurgerCard
          title="Fruit Salad"
          image="/images/b7.png"
          reviews="9"
          price="800 PKR"
        />
        <BurgerCard
          title="Wings with Fries and Nuggets"
          image="/images/b8.png"
          reviews="11"
          price="1,200 PKR"
        />
      </div>
    </div>
  );
};

export default PopularBurger;
