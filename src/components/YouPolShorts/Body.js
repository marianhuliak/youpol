import React, { useState, useEffect } from "react";
import "./Body.css"

import monkey1 from "./monkey1.png";
import monkey2 from "./monkey2.webp";
import monkey3 from "./monkey3.jpg";
import monkey4 from "./monkey4.jpg";
import monkey5 from "./monkey5.webp";
import monkey6 from "./monkey6.webp";
import qrcode from "./qrcode.svg";


const Body = () => {
  const photos = [monkey1, monkey2, monkey3, monkey4, monkey5, monkey6];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const changePhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changePhoto, 10 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="gallery">
        <img src={photos[currentPhotoIndex]} alt="Photo" className="photo"  />
        <img src={qrcode} className="qrcode" alt="QR Code"  />
      </div>
    </>
  );
};

export default Body;
