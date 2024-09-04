import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/contactlogo.svg";
import giti from "../../assets/Vector.svg";
import twiter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";

const Footer = () => {
  return (
    <div className="container mx-auto pb-12">
      <div className="pl-5 flex justify-between pt-[260px] border-b-[1px] border-gray-400 pb-5 ">
        <img src={logo} alt="logo" />
        <div className="flex gap-24 mr-16 pt-3">
          {" "}
          <h6 className="hidden lg:block lg:text-[var(--Solid-Heading,#42446E)] font-dm-sans text-[18px] font-normal">
            +383 49 153 002
          </h6>
          <h6 className="text-[var(--Solid-Heading,#42446E)] font-dm-sans text-[18px] font-normal sm:pl-20">
            adrianxshalax@gmail.com
          </h6>
          <div className="md:flex gap-5 pr-9 sm:block ">
            {" "}
            <a
              href="https://github.com/adrianxshala"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={giti} alt="git-logo" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              {" "}
              <img src={twiter} alt="twiter-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={linkedin} alt="linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="flex gap-[100px]  pt-10">
          <NavLink
            to="/"
            className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
          >
            About
          </NavLink>
          <NavLink
            to="/techstack"
            className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
          >
            Tech Stack
          </NavLink>
          <NavLink
            to="/projects"
            className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
          >
            Project
          </NavLink>

          <NavLink
            to="/contact"
            className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
          >
            Contact
          </NavLink>
        </div>
        <div className="pt-10 pl-64">
          <h1 className=" text-[19px]  text-gray-600">
            Designed and built by{" "}
            <span className="bg-gradient-to-r from-custom-pink to-custom-blue bg-clip-text text-transparent">
              Pavan MG
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-custom-blue to-custom-blue bg-clip-text text-transparent">
              Love
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-custom-pink to-custom-blue bg-clip-text text-transparent">
              Coffe
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
