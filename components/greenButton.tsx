import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Encode_Sans_Condensed } from "next/font/google";

const encode = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface GreenButtonProps {
  text: string;
}

const GreenButton = (props: GreenButtonProps) => {
  return (
    <div className={encode.className}>
      <button className="bg-[#a7b928] py-3 px-6 uppercase font-bold rounded-md font-econdensed hover:bg-[#303436] hover:text-white transition-all duration-500">
        {props.text}
      </button>
    </div>
  );
};

export default GreenButton;
