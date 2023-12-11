"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions";
import { SparklesIcon } from "@heroicons/react/20/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-35 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto mt-[70px] text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <a
            href="https://drive.google.com/file/d/1S0vJCrCZQBFv4S46uwr9FxQVVg0_juF2/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="Welcome-text text-[13px]">View My CV</h1>
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Full Stack Software
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Developer
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Developer with expertise in creating
          APIs using Node.js, Python, and PHP. Experienced in web and mobile
          development. Specialized in caching concepts for scalable and
          resilient systems. Passionate about staying current with evolving
          technology trends.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <a
            href="https://drive.google.com/file/d/1S0vJCrCZQBFv4S46uwr9FxQVVg0_juF2/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn More!
            </a>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
