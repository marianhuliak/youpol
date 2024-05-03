import React from "react";
import "./Navigation.css";
import mainPicture from "./mainPicture.svg";

const Navigation = () => {
  const titleFromApi = "Title";
  const ownerName = "Name";

  return (
    <>
      <div className="navContainer">
        <h1 className="title">{titleFromApi}</h1>
        <div className="linkContainer">
          <div className="link">
            <img src={mainPicture} className="image" alt="Main"></img>
            <div className="ownerContainer">
              <p className="description">Owner</p>
              <p className="ownerName">{ownerName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
