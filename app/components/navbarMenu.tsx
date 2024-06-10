import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const NavbarMenu = () => {
  return (
    <>
      <div className="flex fixed items-center justify-between z-40 bg-[#011329] w-screen lg:hidden px-6 py-4 shadow-md">
        <a href="#" className="">
          <Image
            className="w-full object-contain"
            src="/images/equipacare-logo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
          />
        </a>
        <a
          href="#"
          target="_blank"
          className="  px-4 py-4 bg-transparent border border-[#A4BA25] text-[#A4BA25] text-base font-bold rounded-md uppercase  hover:bg-[#A4BA25] hover:text-[#3C3D50] transition-all duration-500 lg:mr-4"
        >
          Voltar para o início
        </a>
      </div>
      <header className="h-12 md:h-24 flex items-center justify-between bg-[#011329] text-[#A4BA25] antialiased font-bold mb-24 ">
        <a href="#" className="">
          <Image
            className="w-full object-contain "
            src="/images/equipacare-logo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
          />
        </a>
        <div className="">
          <div className="flex items-center gap-5 lg:flex-row lg:gap-0  px-8">
            <a
              href="#"
              target="_blank"
              className="block  px-4 py-3 bg-transparent border border-[#A4BA25] text-[#A4BA25] text-base font-semibold uppercase hover:text-white hover:bg-[#05A93D] transition-all duration-500 lg:mr-4"
            >
              Voltar para o início
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarMenu;
