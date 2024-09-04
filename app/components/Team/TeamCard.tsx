import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  name: string;
  position: string;
}

const TeamCard = ({ image, name, position }: Props) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-[300px] h-[300px]">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-2xl"
        />
      </div>
      <h1 className="text-[24px] text-gray-800 mt-[1.5rem] text-center font-bold">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium rounded-md">
        {position}
      </p>
      <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">
        {name} brings years of experience in culinary arts, specializing in creating delicious and authentic dishes with a passion for perfection.
      </p>
    </div>
  );
};

export default TeamCard;
