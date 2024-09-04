import React from "react";
import build from "../assets/mdi_office-building.svg";
import locatin from "../assets/carbon_location.svg";
import calendar from "../assets/gg_calendar-dates.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className=" container mx-auto">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-poppins text-[42px] text-[#42446E] pb-3 "
        >
          About Me
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-dark-content  text-[18px] "
        >
          As a passionate and detail-oriented front-end developer, <br /> I
          specialize in building responsive, user-friendly, and visually <br />{" "}
          appealing web applications.
        </motion.h6>

        <motion.div
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
      
        >
          <h1 className="font-poppins text-[42px] text-[#42446E] pt-16   ">
            Work Experience
          </h1>
          <div>
            <div className="flex w-[715px] justify-between pt-5">
              <h3 className="text-dark-content  text-[22px] ">
                Personal Project React Js{" "}
              </h3>
              <button className="bg-buttoni px-6 rounded-3xl text-[#018C0F]  font-semibold ">
                Full Time
              </button>
            </div>
            <div className="flex gap-40 pt-2 border-b border-gray-300 w-[715px] pb-5">
              <h6 className="flex text-[#A7A7A7]">
                <img src={build} alt="bulid" />
                E-comerce
              </h6>
              <h6 className="flex text-[#A7A7A7] ">
                <img src={locatin} alt="" />
                Pristina
              </h6>
              <h6 className="flex text-[#A7A7A7] pl-12">
                <img src={calendar} alt="" />
                Aug 2024- Sep 2024
              </h6>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-poppins text-[42px] text-[#42446E] pt-16 "
        >
          Education
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex w-[715px] justify-between pt-5">
            <h3 className="text-dark-content  text-[22px] ">
              Creative Hub EU & USA{" "}
            </h3>
            <button className="bg-buttoni px-6 rounded-3xl text-[#018C0F]  font-semibold ">
              Full Time
            </button>
          </div>
          <div className="flex gap-40 pt-2 border-b border-gray-300 w-[715px] pb-5">
            <h6 className="flex text-[#A7A7A7] ">
              <img src={build} alt="bulid" />
              Front End Developer
            </h6>

            <h6 className="flex text-[#A7A7A7] pl-[210px]">
              <img src={calendar} alt="" />
              Sep 2023 - Sep 2024
            </h6>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="pb-9"
        >
          <div className="flex w-[715px] justify-between pt-9">
            <h3 className="text-dark-content  text-[22px] ">
              University "Hasan Prishtina"{" "}
            </h3>
            <button className="bg-buttoni px-6 rounded-3xl text-[#018C0F]  font-semibold ">
              Full Time
            </button>
          </div>
          <div className="flex gap-40 pt-2 border-b border-gray-300 w-[715px] pb-5">
            <h6 className="flex text-[#A7A7A7] ">
              <img src={build} alt="bulid" />
              Banking, Finance and Accounting
            </h6>

            <h6 className="flex text-[#A7A7A7] pl-[140px]">
              <img src={calendar} alt="" />
              Oct 2018 - current
            </h6>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
