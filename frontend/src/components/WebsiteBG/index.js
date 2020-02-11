import React, { useState, useEffect } from "react";
import "./index.css";

const WebsiteBG = () => {
  //  Better version --based on scroll event instead of looped requests
  let blurNum;
  const [pos, setPos] = useState(window.pageYOffset); // eslint-disable-line

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPos(window.pageYOffset * 2.75);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  blurNum = Math.min(10, pos / 100);

  return (
    <div className="back">
      <div className="landing-page" style={{ filter: `blur(${blurNum}px)` }} />
    </div>
  );
};

export default WebsiteBG;
