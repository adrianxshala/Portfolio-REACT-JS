import React from "react";
import Hero from "../Components/Banner/Hero";
import Tech from "../Components/Banner/Tech";
import Projekt from "../Components/Banner/Projekt";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Tech/>
      <Projekt />
      <Footer/>
    </div>
  );
};

export default Home;
