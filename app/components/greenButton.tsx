import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const GreenButton = () => {
  return (
    <div>
      <button className="bg-[#a7b928] py-3 px-6 uppercase font-bold rounded-md hover:bg-[#303436] hover:text-white transition-all duration-500">
        Falar com especialista
      </button>
    </div>
  );
};

export default GreenButton;
