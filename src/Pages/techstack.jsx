import React from "react";
import htmllogo from "../assets/html.svg";
import csslogo from "../assets/css.svg";
import jslogo from "../assets/js.svg";
import reactlogo from "../assets/logos_react.svg";
import tailwindlogo from "../assets/tailwind.svg";
import bootstraplogo from "../assets/bootstrap.png";
import framerlogo from "../assets/framer-motion.svg";
import sasslogo from "../assets/sass.svg";
import gitlogo from "../assets/git lokal.svg";
import github from "../assets/github.svg";
import vslogo from "../assets/vs.svg";
import mui from "../assets/mui-logo-56F171E991-seeklogo.com.png";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <>
      <div className="container mx-auto p-16 ">
        <motion.h1
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[var(--Solid-Heading,#42446E)] font-poppins text-[42px] font-bold leading-[26px] pt-12"
        >
          My Tech Stack
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[var(--dark-content,#666)] font-medium  text-[20px] pt-8 "
        >
          {" "}
          As a front-end developer, I utilize a diverse range of technologies and tools to create responsive,<br/> user-friendly web applications. Here’s an overview of the key technologies in my tech stack:
        </motion.h6>
        <div className="flex gap-32 pt-36">
          <motion.img 
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          src={htmllogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} src={csslogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }} src={jslogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }} src={reactlogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }} src={tailwindlogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }} src={bootstraplogo} alt="" />
        </div>
        <div className="flex gap-36 pt-24">
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }} src={framerlogo} width={100} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} src={sasslogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }} src={gitlogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }} src={mui} width={100} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }} src={vslogo} alt="" />
          <motion.img initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }} src={github} alt="" />
        </div>
      </div>
    </>
  );
};

export default TechStack;
