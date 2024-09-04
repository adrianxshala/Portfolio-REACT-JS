// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo 1.png";
// import gitlogo from "../../assets/Vector.svg";
// import twiterlogo from "../../assets/ant-design_twitter-circle-filled.svg";
// import linkedinlogo from "../../assets/entypo-social_linkedin-with-circle.svg";
// import { motion } from "framer-motion";
// import { RiCloseLine } from 'react-icons/ri';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import SideBar from "./SideBar";

// const Navbar = () => {
//   const [sideBar, setSideBar] = useState(false);
//   const toggleSideBar = () => {
//     setSideBar(!sideBar);
//   };

//   return (
//     <nav className="container mx-auto flex justify-between items-center py-9">
//       <motion.a
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         href="/"
//       >
//         <img src={logo} alt="logo-img" width={90} />
//       </motion.a>
//       <div className="hidden lg:flex gap-[100px] pt-3">
//         <NavLink
//           to="/"
//           className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/techstack"
//           className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
//         >
//           Tech Stack
//         </NavLink>
//         <NavLink
//           to="/projects"
//           className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
//         >
//           Project
//         </NavLink>

//         <NavLink
//           to="/contact"
//           className="text-gray-600 text-center font-dm-sans text-lg font-medium leading-6"
//         >
//           Contact
//         </NavLink>
//       </div>
//       <div className="hidden lg:flex gap-5 pl-9">
//         <motion.a
//           initial={{ opacity: 0, x: +15 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           href="https://github.com/adrianxshala"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={gitlogo} alt="git-logo" />
//         </motion.a>
//         <motion.a
//           initial={{ opacity: 0, x: +15 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           href=""
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={twiterlogo} alt="twiter-logo" />
//         </motion.a>
//         <motion.a
//           initial={{ opacity: 0, x: +15 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.7 }}
//           href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={linkedinlogo} alt="linkedin-logo" />
//         </motion.a>
//       </div>
//       <button
//         className={`md:hidden flex items-center transition-transform duration-300 ease-in-out mb-8 ${
//           sideBar ? "rotate-180" : "rotate-0"
//         }`}
//         onClick={toggleSideBar}
//       >
//         {sideBar ? (
//           <RiCloseLine className="w-6 h-6 z-50" />
//         ) : (
//           <GiHamburgerMenu className="w-6 h-6" />
//         )}
//       </button>
//       {sideBar && <SideBar />}
//     </nav>
    
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo 1.png";
import gitlogo from "../../assets/Vector.svg";
import twiterlogo from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedinlogo from "../../assets/entypo-social_linkedin-with-circle.svg";
import { motion } from "framer-motion";
import { RiCloseLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from "./SideBar";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <nav className="container mx-auto  flex justify-between items-center py-9">
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        href="/"
      >
        <img src={logo} alt="logo-img" width={90} />
      </motion.a>
      <div className="hidden md:flex gap-[100px] pt-3">
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
      <div className="hidden lg:flex gap-5 pl-9">
        <motion.a
          initial={{ opacity: 0, x: +15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="https://github.com/adrianxshala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitlogo} alt="git-logo" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: +15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twiterlogo} alt="twiter-logo" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: +15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinlogo} alt="linkedin-logo" />
        </motion.a>
      </div>
      <button
        className={`md:hidden flex items-center transition-transform duration-300 ease-in-out mb-8 ${
          sideBar ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleSideBar}
      >
        {sideBar ? (
          <RiCloseLine className="w-6 h-6 z-50" />
        ) : (
          <GiHamburgerMenu className="w-6 h-6" />
        )}
      </button>
      {sideBar && <SideBar closeSidebar={toggleSideBar} />}
    </nav>
  );
};

export default Navbar;