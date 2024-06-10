import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
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
