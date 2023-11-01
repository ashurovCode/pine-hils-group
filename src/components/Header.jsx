import React, { useState } from "react";
import logo from "../assets/logo.png";
import naviImg from "../assets/360.png";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); // Toggle the 'nav' state
  };

  return (
    <header className=" bg-zinc-800 p-4">
      <div className="flex max-w-[1240px] p-4 justify-between mx-auto items-center bg-zinc-800">
        <img
          className="cursor-pointer sm:w-18 lg:w-28"
          src={logo}
          alt="brend"
        />
        <ul className="hidden md:flex sm:text-sm lg:text-lg lg:space-x-4 text-stone-400 font-normal font-['Inter']">
          <li className="cursor-pointer sm:p-2 hover:text-stone-500">О нас</li>
          <li className="cursor-pointe sm:p-2 hover:text-stone-500">
            Наши услуги
          </li>
          <li className="cursor-pointer sm:p-2 hover:text-stone-500">
            Проекты
          </li>
          <li className="cursor-pointer sm:p-2 hover:text-stone-500">
            Преимущества
          </li>
          <li className="cursor-pointer sm:p-2 hover:text-stone-500">
            Команда
          </li>
          <li className="cursor-pointer sm:p-2 hover:text-stone-500">
            Карьера
          </li>
          <li className="flex items-center cursor-pointer p-4 sm:p-2 hover:text-stone-500">
            <img
              className="pr-2.5 w-8 sm:w-6 sm:pr-1"
              src={naviImg}
              alt="360"
            />
            360°
          </li>
        </ul>
        <div className="hidden md:flex md:space-x-4 sm:space-x-2 text-stone-400 md:text-lg font-normal font-['PF DinDisplay Pro']">
          <p className="cursor-pointer sm:text-sm  hover:text-stone-500">KZ</p>
          <p className="cursor-pointer sm:text-sm  hover:text-stone-500">RU</p>
          <p className="cursor-pointer sm:text-sm  hover:text-stone-500">EN</p>
        </div>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer text-white "
        >
          {nav ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenuUnfold size={30} />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed h-full bg-zinc-800 left-0 top-0 w-[60%] border-r border-r-gray-400 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex justify-between p-4 text-stone-400 text-lg font-normal font-['PF DinDisplay Pro']">
            <img className="cursor-pointer w-28" src={logo} alt="brend" />
            <div className="flex items-center space-x-4">
              <p className="cursor-pointer hover:text-stone-500">KZ</p>
              <p className="cursor-pointer hover:text-stone-500">RU</p>
              <p className="cursor-pointer hover:text-stone-500">EN</p>
            </div>
          </div>
          <ul className="p-7 pt-14 text-stone-400 text-lg font-normal uppercase">
            <li className="p-4 cursor-pointer border-b border-gray-400 hover:text-stone-500">
              О нас
            </li>
            <li className="p-4 cursor-pointer border-b border-gray-400 hover:text-stone-500">
              Наши услуги
            </li>
            <li className="p-4 cursor-pointer border-b border-gray-400 hover:text-stone-500">
              Проекты
            </li>
            <li className="p-4 cursor-pointer border-b border-gray-400 hover:text-stone-500">
              Преимущества
            </li>
            <li className="p-4 cursor-pointer border-b border-gray-400 hover:text-stone-500">
              Команда
            </li>
            <li className="p-4 cursor-pointer border-b border-gray-400 hover:text-stone-500">
              Карьера
            </li>
            <li className="p-4 flex items-center cursor-pointer hover:text-stone-500">
              360° <img className="pl-2.5 w-8" src={naviImg} alt="360" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
