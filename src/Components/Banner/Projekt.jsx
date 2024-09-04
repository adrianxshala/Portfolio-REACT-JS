import React, { useRef } from "react";
import first from "../../assets/Rectangle 4.png";
import second from "../../assets/Rectangle 6.png";
import third from "../../assets/Rectangle 13.png";
import { useInView } from "framer-motion";
import liveprevier1 from "../../assets/live previer 1.png";
import liveprevier2 from "../../assets/live previer 2.png";

const Projekt = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div className="container mx-auto md:py-9  md:mt-20  ">
      <h1 className="text-[#42446E]  text-[40px] font-poppins text-center ">
        Projects
      </h1>
      <p className="text-[#666] text-[20px] text-center ">
        Welcome to my portfolio! Here, <br /> you’ll find a collection of my
        front-end projects that showcase my skills in building responsive,
      </p>
      <div className="lg:flex justify-around    pt-[70px]  ">
        <div className="mb-[50px] w-[90%] sm:w-[70%] ml-5 md:w-[80%] lg:w-[24%] rounded-[20px] bg-white shadow-[2px_2px_100px_0px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src={first}
            alt="first-img "
            className="w-full  lg:w-full rounded-[20px]"
          />
          <div className="p-4 bg-[#fff]  rounded-[20px]">
            <h1 className="text-[#000] text-[28px]  font-medium">
              Portfolio Project
            </h1>
            <p className="text-[#666] font-[18px]">
              This project is an e-commerce front-end application built with
              React Js.Styled with Tailwind CSS and enhanced with animations
              using Framer Motion
            </p>
            <h6 className="text-[#42446E] font-poppins py-2">
              Tech Stack : React,SASS,Tailwind Css
            </h6>
            <div className="flex pb-2 ">
              <img src={liveprevier1} alt="" />
              <h4 className="pr-[99px] underline"> Live Preview</h4>
              <img src={liveprevier2} alt="" />
              <a
                className="underline"
                href="https://github.com/adrianxshala/Personal-Project-REACT-JS"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="mb-[50px] w-[85%] sm:w-[80%] ml-9 md:w-[80%] lg:w-[24%] rounded-[20px] bg-white shadow-[2px_2px_100px_0px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src={second}
            alt="first-img"
            className="w-full  lg:w-full rounded-[20px]"
          />
          <div className="p-4 bg-[#fff]  rounded-[20px]">
            <h1 className="text-[#000] text-[28px]  font-medium">
              E-comerce Project
            </h1>
            <p className="text-[#666] font-[18px]">
              This e-commerce project is built using React, showcasing modern
              web development practices and responsive design principles. Styled
              with Tailwind CSS and enhanced with animations using Framer Motion
              and i use fake API
            </p>
            <h6 className="text-[#42446E] font-poppins py-2">
              Tech Stack : React,SASS,Tailwind Css
            </h6>
            <div className="flex  ">
              <img src={liveprevier1} alt="" />
              <h4 className="pr-[99px] underline"> Live Preview</h4>
              <img src={liveprevier2} alt="" />
              <a
                className="underline"
                href="https://github.com/adrianxshala/Personal-Project-REACT-JS"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        <div className="mb-[50px] w-[90%] sm:w-[70%] ml-5 md:w-[80%] lg:w-[24%] rounded-[20px] bg-white shadow-[2px_2px_100px_0px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src={third}
            alt="first-img"
            className="w-full  lg:w-full rounded-[20px]"
          />
          <div className="p-4 bg-[#fff]  rounded-[20px]">
            <h1 className="text-[#000] text-[28px]  font-medium">
              Static WebSide
            </h1>
            <p className="text-[#666] font-[18px]">
              This project is a dynamic web application built with HTML, CSS,
              and JavaScript. It showcases a responsive design that adapts to
              various screen sizes, providing a seamless user experience.
            </p>
            <h6 className="text-[#42446E] font-poppins py-2">
              Tech Stack : HTML,CSS,JS
            </h6>
            <div className="flex  ">
              <img src={liveprevier1} alt="" />
              <h4 className="pr-[99px] underline"> Live Preview</h4>
              <img src={liveprevier2} alt="" />
              <a
                className="underline"
                href="https://github.com/adrianxshala/Academy-Project-HTML-CSS-JAVASCRIPTS"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projekt;