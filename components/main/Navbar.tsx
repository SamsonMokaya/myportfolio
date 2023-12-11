"use client"

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Samson Mokaya
          </span>
        </a>

        <div className="flex items-center md:hidden">
          {/* Mobile menu icon (you can use your own icon here) */}
          <button
            className="text-white cursor-pointer focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-row items-center justify-between w-1/2 md:mr-20`}
        >
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact me
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-7">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
