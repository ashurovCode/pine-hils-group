import React from "react";
import heroBg from "../assets/heroBg.png";
import herolinkarow from "../assets/heroLinkArow.svg";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div
      className="bg-[image:var(--image-url)] w-full bg-no-repeat bg-cover bg-center h-[641px]"
      style={{ "--image-url": `url(${heroBg})` }}
    >
      <div className="md:relative max-w-[1240px] h-full p-4 mx-auto flex flex-col font-bold font-['PFDinDisplay Pro'] pt-48">
        <div className="max-w-[500px] text-white ">
          <h1 className="md:text-7xl sm:text-6xl text-4xl">
            PINE HILLS{" "}
            <span className="md:text-7xl sm:text-4xl text-2xl font-normal">
              ARCHITECTS
            </span>
          </h1>
          <div className="flex pt-5 items-center space-x-2">
            <p className="text-white md:text-3xl sm:texr-2xl text-1xl font-normal font-['PFDinDisplay Pro'] leading-10 ">
              МЫ СТРОИМ
            </p>
            <Typed
              className="text-zinc-300 md:text-3xl sm:texr-2xl text-1xl"
              strings={["КОМФОРТНЫЕ", "ДОМА"]}
              typeSpeed={60}
              backSpeed={70}
              loop
            />
          </div>
        </div>
        <div className="flex flex-col p-4 md:absolute bottom-0 right-0 space-y-5 py-20 text-white text-xl font-normal font-['Inter']">
          <a className="flex right-0 gap-x-2.5 hover:text-stone-400" href="#!">
            Наши проекты <img src={herolinkarow} alt="Nash Proekt" />
          </a>
          <a className="flex gap-x-2.5 hover:text-stone-400" href="#!">
            Получить консультацию <img src={herolinkarow} alt="Nash Proekt" />
          </a>
        </div>
      </div>
    </div>
  );
}
