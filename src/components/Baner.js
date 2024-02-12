import React, { useState } from 'react';
import './Baner.css';

const Baner = () => {
  return (
    <div>
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
        <button className="commonButton">you watched</button>
        <button className="commonButton">News for you</button>
      </div>
      <div className="videos-baner">
       

        <iframe src="https://www.youtube.com/embed/83fCmfBqX3Y" title="Oggy and the Cockroaches 😂 COCKROACH OR CAT - Full Episodes HD"></iframe>
        <iframe src="https://www.youtube.com/embed/CoUOJSASjXc" title="Zig &amp; Sharko 🧐 MERMAID OR JELLYFISH - Compilation in HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/jHDfl9i5ky4" title="Zig &amp; Sharko 🌈 RAINBOW SADNESS #2 - Compilation in HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/z4GnCeyM_Os" title="Zig &amp; Sharko 🎸 THE NEW ROCKSTAR - Compilation in HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/9QbnMNd0_Zc" title="Zig &amp; Sharko ⚡ BERNIE SAVED THE WORLD - Compilation in HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/O5rClUvxGxQ" title="Zig &amp; Sharko ✨ NEW SEASON 3 EPISODES in HD 🌈 RAINBOW GIRL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/ePFo2BFCUd0" title="Oggy and the Cockroaches 🤮 WEIRD LIQUID - Full Episodes HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/BJCWzdj8UR8" title="Zig &amp; Sharko ✨ NEW SEASON 3 EPISODES in HD 🎄 CHRISTMAS COMPILATION #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/6ZbnBxn3akg" title="Zig &amp; Sharko ⚡ ULTIMATE BATTLE - Compilation in HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Baner;
