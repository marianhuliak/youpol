import React, { useState, useEffect } from "react";
import logo from "../images/youpol_logo_2017.svg";
import logoWhite from "../images/youpol_logo_2017_white.svg";
import magnifier from "../images/search_magnifier.svg";
import whiteMagnifier from "../images/search_magnifier_white.svg";
import micro from "../images/microphone_button.svg";
import whiteMicro from "../images/microphone_button_white.svg"
import downloadButton from "../images/downloadButton.svg";
import whiteDownload from "../images/downloadButton_white.svg"
import bell from "../images/bell.svg";
import whiteBell from "../images/bell_white.svg"
import burger from "../images/burger.svg";
import whiteBurger from "../images/burger_white.svg";


import "./Nav.css";
import "./Theme.css";


const Nav = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [inputValue, setInputValue] = useState("");
  
  const clickThemeHandler = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const clickSearchHandler = () => {
    setInputValue("");
  };

  useEffect(() => {
    document.body.classList.remove("body-light", "body-dark");

    const className = currentTheme === "light" ? "body-light" : "body-dark";
    document.body.classList.add(className);
  }, [currentTheme]);

  return (
    <div className="navContainer">
      <div className="mainLogoContainer">
        <button className="burgerMenuButton">
          <img className="burgerMenu" src={currentTheme === "light" ? burger : whiteBurger} alt="Burger menu" />
        </button>
        <img
          className="mainLogo"
          src={currentTheme === "light" ? logo : logoWhite}
          alt="Logo"
        />
      </div>

      <div className="searchContainer">
        <label className="exp">
          <input
            className="searchInput"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <button onClick={clickSearchHandler} className="searchButton">
            <img
              className="searchMagnifying"
              src={currentTheme === "light" ? magnifier : whiteMagnifier}
              alt="YouPol music"
            />
          </button>
        </label>
        <button className="searchMicroButton">
          <img className="searchMicro" src={currentTheme === "light" ? micro : whiteMicro} alt="Microphone" />
        </button>
      </div>
      <div className="settingContainer">
        <button className="downloadButton">
          <img
            className="download"
            src={currentTheme === "light" ? downloadButton : whiteDownload }
            alt="Download button"
          />
        </button>
        <button className="bellButton">
          <img className="bell" src={currentTheme === "light" ? bell : whiteBell} alt="Bell button" />
        </button>
        <input onClick={clickThemeHandler} type="checkbox" id="checkbox" />
      </div>
    </div>
  );
};

export default Nav;
