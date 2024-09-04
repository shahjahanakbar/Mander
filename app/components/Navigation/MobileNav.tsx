import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "-translate-x-full";
  const overlayStyle = showNav ? "opacity-100" : "opacity-0";

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 h-full bg-[#000000b3] z-[1002] transition-transform duration-300 ease-out ${navStyle} transition-opacity duration-300 ease-out ${overlayStyle}`}
    >
      <ImCross
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white cursor-pointer"
      />
      <div
        className={`bg-gradient-to-b from-teal-800 to-teal-600 h-full w-[80%] flex flex-col items-center justify-center transition-transform duration-300 ease-out ${navStyle}`}
      >
        <ul className="space-y-8">
          <li className="text-[30px] font-semibold text-white transition-colors duration-300 ease-in-out hover:text-yellow-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[30px] font-semibold text-white transition-colors duration-300 ease-in-out hover:text-yellow-300">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[30px] font-semibold text-white transition-colors duration-300 ease-in-out hover:text-yellow-300">
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[30px] font-semibold text-white transition-colors duration-300 ease-in-out hover:text-yellow-300">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[30px] font-semibold text-white transition-colors duration-300 ease-in-out hover:text-yellow-300">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
