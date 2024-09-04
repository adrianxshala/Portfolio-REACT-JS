import React from "react";
import adrianbanner from "../../assets/aa.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="container mx-auto  lg:flex h-screen justify-around items-center pb-[100px]">
      {" "}
      <div >
        <motion.h1
          initial={{ opacity: 0, y: +10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          class="text-[var(--Solid-Heading,#42446E)] font-poppins text-[58px] font-bold leading-[70px] tracking-[-1px] "
        >
          Hi 👋,{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: +10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[var(--Solid-Heading,#42446E)] font-poppins text-[58px] font-bold leading-[70px] tracking-[-1px] "
        >
          My name is{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: +10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-poppins text-[58px] font-bold leading-[70px] tracking-[-1px]  bg-gradient-to-r from-custom-pink to-custom-blue text-transparent bg-clip-text"
        >
          Adrian Shala
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: +10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-[var(--Solid-Heading,#42446E)] font-poppins text-[58px] font-bold leading-[70px] tracking-[-1px] "
        >
          {" "}
          I build things for web
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: +50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="ml-[20px]    md:p-2  bg-gradient-to-r from-custom-pink to-custom-blue rounded-full w-[450px] h-[474px] "
      >
        <img
          src={adrianbanner}
          alt="banner"
          width={450}
          className="rounded-full bg-white"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
