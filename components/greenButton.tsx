import React, { ReactNode } from "react";

import { Encode_Sans_Condensed } from "next/font/google";
import Image from "next/image";

const encode = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface GreenButtonProps {
  text: string;
  icon?: string;
  children?: ReactNode;
}

const GreenButton = (props: GreenButtonProps) => {
  return (
    <div className={encode.className}>
      <button className=" flex  gap-4 bg-[#a7b928] py-3 px-6 uppercase font-bold rounded-md font-econdensed hover:bg-[#303436] hover:text-white transition-all duration-500">
        {props.text}
        {/* <Image
          src={props.icon}
          alt="icon "
          height={24}
          width={24}
          className="hover:text-white"
        /> */}
      </button>
    </div>
  );
};

export default GreenButton;
