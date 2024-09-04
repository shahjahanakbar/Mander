import React from "react";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className="pt-[5rem] pb-[5rem] bg-center bg-cover relative mt-[2rem] mb-[3rem] bg-[url('/images/bg-black.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000a6]"></div>
      <div className="w-[80%] mx-auto relative z-[20] grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        {/* Text Content */}
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]">
            Looking for a Special Dinner Experience? Book Your Table Now!
          </h1>
          <p className="text-[17px] mt-[1rem] text-white text-opacity-70">
            Indulge in a memorable dining experience with our exquisite menu. Our talented chefs are eager to serve you and make your evening exceptional.
          </p>
        </div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
