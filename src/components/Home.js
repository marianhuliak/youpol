import React, { useState } from "react";
import Nav from "./Nav.js";
import MainMenu from "./MainMenu.js";
import Banner from "./Banner.js";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="homeComtainer">
        <MainMenu />
        <Banner />
      </div>
    </>
  );
};

export default Home;
