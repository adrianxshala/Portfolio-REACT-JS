import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ closeSidebar }) => {
  return (
    <div className="bg-gray-400 h-full bg-opacity-30 backdrop-filter backdrop-blur-lg absolute top-24 left-0 w-full z-40">
      <nav className="flex flex-col justify-start items-center pt-20">
        <NavLink
          to="/"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
          onClick={closeSidebar}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
          onClick={closeSidebar}
        >
          About
        </NavLink>
        <NavLink
          to="/techstack"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
          onClick={closeSidebar}
        >
          TechStack
        </NavLink>
        <NavLink
          to="/projects"
          className="text-black font-thin text-3xl py-5 hover:text-blue-500"
          onClick={closeSidebar}
        >
          Project
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;