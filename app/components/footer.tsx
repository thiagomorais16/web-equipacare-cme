import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const navLinks = [
  {
    link: "#",
    label: "Home",
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Serviços",
  },
];

const contactLinks = [
  {
    link: "#",
    label: "contato@equipacare.com.br",
  },
  {
    link: "#",
    label: "+55 (24) 3348 - 7157",
  },
  {
    link: "#",
    label: "+55 (24) 98119 - 1448",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col">
        <div className=" px-10 py-16 bg-[#383838] text-white flex flex-col items-start gap-10 lg:gap-5 lg:flex-row lg:items-start lg:justify-evenly">
          <div className="flex flex-col mt-10 lg-mt-2">
            <Image
              src="/images/equipacare-logo.png"
              alt="Logo"
              width={200}
              height={100}
            />
            <p className="text-white antialiased mt-4  lg:w-[300px] lg:mt-10 antialiased">
              Empresa de Engenharia para Clínicas e Hospitais com foco na
              Inteligência do Negócio.
            </p>
          </div>
          <div>
            <h2 className="text-[#D5D5D5] lg:text-xl font-semibold capitalize">
              Mapa do site
            </h2>

            <ul className="flex flex-col gap-1 mt-2">
              {navLinks.map((info) => (
                <li key={info.label}>
                  <a
                    href={info.link}
                    className="text-[#A4BA25] hover:font-bold transition-all duration-500"
                  >
                    {info.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#D5D5D5] lg:text-xl font-semibold capitalize">
              Contato
            </h2>
            <ul className="flex flex-col gap-1 mt-2 ">
              {contactLinks.map((info) => (
                <li key={info.label}>
                  <a
                    href={info.link}
                    className="text-[#A4BA25] hover:font-bold transition-all duration-500"
                  >
                    {info.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#D5D5D5] font-semibold lg:text-xl capitalize">
              Acompanhe nossas redes sociais
            </h2>
            <ul className="flex gap-4 mt-4">
              <li className="bg-[#484848] w-16 h-16 p-4 rounded-lg">
                <a
                  href="#"
                  className="text-[#A4BA25] hover:font-bold transition-all duration-500"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2xs"
                    className="text-[#A4BA25]"
                  />
                </a>
              </li>
              <li className="bg-[#484848] w-16 h-16 p-4 rounded-lg">
                <a
                  href="#"
                  className="text-[#A4BA25] hover:font-bold transition-all duration-500"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2xs"
                    className="text-[#A4BA25]"
                  />
                </a>
              </li>
              <li className="bg-[#484848] w-16 h-16 p-4 rounded-lg">
                <a
                  href="#"
                  className="text-[#A4BA25] hover:font-bold transition-all duration-500"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2xs"
                    className="text-[#A4BA25]"
                  />
                </a>
              </li>
              <li className="bg-[#484848] w-16 h-16 p-4 rounded-lg">
                <a
                  href="#"
                  className="text-[#A4BA25] hover:font-bold transition-all duration-500"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2xs"
                    className="text-[#A4BA25]"
                  />
                </a>
              </li>
            </ul>
            <div className="flex gap-5 mt-10">
              <Image
                src="/images/footer/quality.png"
                alt="selo de qualificação"
                width={100}
                height={100}
                quality={100}
              />

              <Image
                src="/images/footer/gptw.png"
                alt="selo de qualificação"
                width={60}
                height={100}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="bg-black h-20 flex items-center justify-center">
          <p className="text-[#54595F] antialiased">
            Todos os direitos reservados. Feito com 💙 por{" "}
            <a
              href="#"
              target="_blank"
              className="text-[#A4BA25] hover:font-bold transition-all duration-500"
            >
              DNC.
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
