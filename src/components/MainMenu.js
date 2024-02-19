import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";

import home from "../images/home.svg";
import shorts from "../images/shorts.svg";
import subscriptions from "../images/subscriptions.svg";
import music from "../images/youpol_music.svg";

import homeWhite from "../images/home_white.svg";
import shortsWhite from "../images/shorts_white.svg";
import subscriptionsWhite from "../images/subscriptions_white.svg";
import musicWhite from "../images/youpol_music_white.svg";

const MainMenu = ({ currentTheme }) => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="main-menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link
            to="/"
            className={`menu-link ${activeItem === "home" ? "active" : ""}`}
            onClick={() => handleClick("home")}
          >
            <div className="menu-icon-container">
              <img src={homeWhite} alt="Home" className="menu-icon" />
            </div>
            <p className="menu-item-text">Main</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/youpol_shorts"
            className={`menu-link ${activeItem === "shorts" ? "active" : ""}`}
            onClick={() => handleClick("shorts")}
          >
            <div className="menu-icon-container">
              <img
                src={shortsWhite}
                alt="YouPol Shorts"
                className="menu-icon"
              />
            </div>
            <p className="menu-item-text">YouPol Shorts</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/subscriptions"
            className={`menu-link ${
              activeItem === "subscriptions" ? "active" : ""
            }`}
            onClick={() => handleClick("subscriptions")}
          >
            <div className="menu-icon-container">
              <img
                src={subscriptionsWhite}
                alt="Subscriptions"
                className="menu-icon"
              />
            </div>
            <p className="menu-item-text">Subscriptions</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/youpol_music"
            className={`menu-link ${activeItem === "music" ? "active" : ""}`}
            onClick={() => handleClick("music")}
          >
            <div className="menu-icon-container">
              <img src={musicWhite} alt="YouPol Music" className="menu-icon" />
            </div>
            <p className="menu-item-text">YouPol music</p>
          </Link>
        </li>
        <hr className="line" />
      </ul>
    </div>
  );
};

export default MainMenu;








/*

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";
import themeContainer from "./ThemeContainer.js";

import home from "../images/home.svg";
import shorts from "../images/shorts.svg";
import subscriptions from "../images/subscriptions.svg";
import music from "../images/youpol_music.svg";

import homeWhite from "../images/home_white.svg";
import shortsWhite from "../images/shorts_white.svg";
import subscriptionsWhite from "../images/subscriptions_white.svg";
import musicWhite from "../images/youpol_music_white.svg";

const MainMenu = ({ currentTheme }) => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="main-menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link
            to="/"
            className={`menu-link ${activeItem === "home" ? "active" : ""}`}
            onClick={() => handleClick("home")}
          >
            <img
              src={themeContainer === "light" ? home : homeWhite}
              alt="Home"
              className="menu-icon"
            />
            <p className="menu-item-text">Main</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/youpol_shorts"
            className={`menu-link ${activeItem === "shorts" ? "active" : ""}`}
            onClick={() => handleClick("shorts")}
          >
            <img
              src={themeContainer === "light" ? shorts : shortsWhite}
              alt="YouPol Shorts"
              className="menu-icon"
            />
            <p className="menu-item-text">YouPol Shorts</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/subscriptions"
            className={`menu-link ${
              activeItem === "subscriptions" ? "active" : ""
            }`}
            onClick={() => handleClick("subscriptions")}
          >
            <img
              src={
                themeContainer === "light" ? subscriptions : subscriptionsWhite
              }
              alt="Subscriptions"
              className="menu-icon"
            />
            <p className="menu-item-text">Subscriptions</p>
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/youpol_music"
            className={`menu-link ${activeItem === "music" ? "active" : ""}`}
            onClick={() => handleClick("music")}
          >
            <img
              src={themeContainer === "light" ? music : musicWhite}
              alt="YouPol Music"
              className="menu-icon"
            />
            <p className="menu-item-text">YouPol music</p>
          </Link>
        </li>
        <hr class="line" />
      </ul>
    </div>
  );
};

export default MainMenu;

*/
