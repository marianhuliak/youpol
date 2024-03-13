import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";

import homeWhite from "../images/home_white.svg";
import shortsWhite from "../images/shorts_white.svg";
import subscriptionsWhite from "../images/subscriptions_white.svg";
import musicWhite from "../images/youpol_music_white.svg";

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="mainMenu">
      <ul className="menuList">
        <li className="menuItem">
          <Link
            to="/"
            className={`menuLink ${activeItem === "home" ? "active" : ""}`}
            onClick={() => handleClick("home")}
          >
            <div className="menuIconContainer">
              <img src={homeWhite} alt="Home" className="menuIcon" />
            </div>
            <p className="menuItemtext">Main</p>
          </Link>
        </li>
        <li className="menuItem">
          <Link
            to="/youpol_shorts"
            className={`menuLink ${activeItem === "shorts" ? "active" : ""}`}
            onClick={() => handleClick("shorts")}
          >
            <div className="menuIconContainer">
              <img src={shortsWhite} alt="YouPol Shorts" className="menuIcon" />
            </div>
            <p className="menuItemtext">YouPol Shorts</p>
          </Link>
        </li>
        <li className="menuItem">
          <Link
            to="/subscriptions"
            className={`menuLink ${
              activeItem === "subscriptions" ? "active" : ""
            }`}
            onClick={() => handleClick("subscriptions")}
          >
            <div className="menuIconContainer">
              <img
                src={subscriptionsWhite}
                alt="Subscriptions"
                className="menuIcon"
              />
            </div>
            <p className="menuItemtext">Subscriptions</p>
          </Link>
        </li>
        <li className="menuItem">
          <Link
            to="/youpol_music"
            className={`menuLink ${activeItem === "music" ? "active" : ""}`}
            onClick={() => handleClick("music")}
          >
            <div className="menuIconContainer">
              <img src={musicWhite} alt="YouPol Music" className="menuIcon" />
            </div>
            <p className="menuItemtext">YouPol music</p>
          </Link>
        </li>
        <hr className="line" />
      </ul>
    </div>
  );
};

export default MainMenu;
