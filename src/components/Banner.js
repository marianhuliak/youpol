import React from "react";
import "./Banner.css";
import logoOggy from "../images/oggy_and_his_friends_logo.jpeg";

const Banner = () => {
  return (
    <div className="bannerContainer">
      <div>
        <button className="commonButton">All of them</button>
        <button className="commonButton">Music</button>
        <button className="commonButton">Live Stream</button>
        <button className="commonButton">Cooking shows</button>
        <button className="commonButton">Games</button>
        <button className="commonButton">News</button>
        <button className="commonButton">Mixes</button>
        <button className="commonButton">Sitcoms</button>
        <button className="commonButton">Recent downloads</button>
        <button className="commonButton">You watched</button>
        <button className="commonButton">News for you</button>
      </div>
      <div className="videosBanner">
        <div className="videoContainer" >
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/83fCmfBqX3Y"
            title="Oggy and the Cockroaches 😂 COCKROACH OR CAT - Full Episodes HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Oggy Logo" />
            </div>
            <div>
              <p>
                Oggy and the Cockroaches 😂 COCKROACH OR CAT - Full Episodes HD
              </p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer">
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/CoUOJSASjXc"
            title="Zig & Sharko 🧐 MERMAID OR JELLYFISH - Compilation in HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Logo" />
            </div>
            <div>
              <p>Zig & Sharko 🧐 MERMAID OR JELLYFISH - Compilation in HD</p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer">
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/jHDfl9i5ky4"
            title="Zig & Sharko 🌈 RAINBOW SADNESS #2 - Compilation in HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Logo" />
            </div>
            <div>
              <p>Zig & Sharko 🌈 RAINBOW SADNESS #2 - Compilation in HD</p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer" >
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/z4GnCeyM_Os"
            title="Zig & Sharko 🎸 THE NEW ROCKSTAR - Compilation in HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Logo" />
            </div>
            <div>
              <p>Zig & Sharko 🎸 THE NEW ROCKSTAR - Compilation in HD</p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer" >
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/9QbnMNd0_Zc"
            title="Zig & Sharko ⚡ BERNIE SAVED THE WORLD - Compilation in HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Logo" />
            </div>
            <div>
              <p>Zig & Sharko ⚡ BERNIE SAVED THE WORLD - Compilation in HD</p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer" >
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/O5rClUvxGxQ"
            title="Zig & Sharko ✨ NEW SEASON 3 EPISODES in HD 🌈 RAINBOW GIRL"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Logo" />
            </div>
            <div>
              <p>Zig & Sharko ✨ NEW SEASON 3 EPISODES in HD 🌈 RAINBOW GIRL</p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer" >
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/ePFo2BFCUd0"
            title="Oggy and the Cockroaches 🤮 WEIRD LIQUID - Full Episodes HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Oggy Logo" />
            </div>
            <div>
              <p>Oggy and the Cockroaches 🤮 WEIRD LIQUID - Full Episodes HD</p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer" > 
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/BJCWzdj8UR8"
            title="Zig & Sharko ✨ NEW SEASON 3 EPISODES in HD 🎄 CHRISTMAS COMPILATION #1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Logo" />
            </div>
            <div>
              <p>
                Zig & Sharko ✨ NEW SEASON 3 EPISODES in HD 🎄 CHRISTMAS
                COMPILATION #1
              </p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
        <div className="videoContainer" >
          <iframe
            className="videoOggy"
            src="https://www.youtube.com/embed/6ZbnBxn3akg"
            title="Zig & Sharko ⚡ ULTIMATE BATTLE - Compilation in HD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="textUnderVideo">
            <div>
              <img className="channelLogo" src={logoOggy} alt="Logo" />
            </div>
            <div>
              <p>Zig & Sharko ⚡ ULTIMATE BATTLE - Compilation in HD</p>
              <p>Oggy & his friends</p>
              <p>1 million views • 2 years ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
