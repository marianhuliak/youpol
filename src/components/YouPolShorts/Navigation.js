import React from "react";
import "./Navigation.css";
import mainPicture from "./mainPicture.svg";

const Navigation = () => {
  const titleFromApi = "Title";
  const ownerName = "Name";

  return (
    <>
      <div className="navContainer">
        <div>
        <h1 className="title">{titleFromApi}</h1>
        </div>
        <div className="linkContainer">
          <a href="https://example.com" className="link">
            <img src={mainPicture} className="image" alt="Main"></img>
            <p className="description">Owner</p>
            <p className="ownerName">{ownerName}</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
