import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface GreenButtonProps {
  text: string;
}

const GreenButton = (props: GreenButtonProps) => {
  return (
    <div>
      <button className="bg-[#a7b928] py-3 px-6 uppercase font-bold rounded-md hover:bg-[#303436] hover:text-white transition-all duration-500">
        {props.text}
      </button>
    </div>
  );
};

export default GreenButton;
