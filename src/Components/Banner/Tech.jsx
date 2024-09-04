import React, { useRef } from "react";
import htmllogo from "../../assets/html.svg";
import csslogo from "../../assets/css.svg";
import jslogo from "../../assets/js.svg";
import reactlogo from "../../assets/logos_react.svg";
import tailwindlogo from "../../assets/tailwind.svg";
import bootstraplogo from "../../assets/bootstrap.png";
import framerlogo from "../../assets/framer-motion.svg";
import sasslogo from "../../assets/sass.svg";
import gitlogo from "../../assets/git lokal.svg";
import github from "../../assets/github.svg";
import vslogo from "../../assets/vs.svg";
import mui from "../../assets/mui-logo-56F171E991-seeklogo.com.png";
import { motion, useInView } from "framer-motion";

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <>
      <div className="hidden lg:block container mx-auto pb-32 h-full mt-[-40px] ">
        <motion.h1 
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.3 ,delay: 0.3 }}
        className="hidden lg:block text-[var(--Solid-Heading,#42446E)] font-poppins text-[42px] text-center font-bold leading-[26px]  ">
          My Tech Stack
        </motion.h1>
        <motion.h6
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.4 ,delay: 0.4 }}
        className="hidden lg:block text-[var(--dark-content,#666)] font-medium text-center  text-[24px] pt-8 px-[50px] ">
          {" "}
          As a front-end developer, I utilize a diverse range of technologies and tools to create responsive, user-friendly web applications. Here’s an overview of the key technologies in my tech stack:
        </motion.h6>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 ,delay: 0.5 }}
          className="hidden lg:flex gap-32 pt-48 pl-24"
        >
          <img src={htmllogo} alt="" />
          <img src={csslogo} alt="" />
          <img src={jslogo} alt="" />
          <img src={reactlogo} alt="" />
          <img src={tailwindlogo} alt="" />
          <img src={bootstraplogo} alt="" />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8,delay: 0.8 }}
          className="hidden lg:flex gap-36 pt-24 pl-24"
        >
          <img src={framerlogo} width={100} alt="" />
          <img src={sasslogo} alt="" />
          <img src={gitlogo} alt="" />
          <img src={mui} width={100} alt="" />
          <img src={vslogo} alt="" />
          <img src={github} alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default Tech;
