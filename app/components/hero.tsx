import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div>img text sub</div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <p>Somos a Equipacare</p>
        <Image
          src="/images/home-banner-matrizes.jpg"
          alt=""
          width={250}
          height={250}
        />
        <p></p>
      </div>
    </>
  );
};

export default Hero;
