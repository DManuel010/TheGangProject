import React from "react";
import "./index.css";

const GodCards = () => {
  return (
    <div>
      <div className="page2">
        <h1>WHAT WE DO</h1>
        <div className="Roster">
          <div className="spacing">
            <div className="GodCard">
              <img src={require("../../assets/God-Cards/Izanami_Default.jpg")} alt="woops..." />{" "}
              <img src={require("../../assets/God-Cards/Terra_Default.jpg")} alt="woops..." />{" "}
              <img src={require("../../assets/God-Cards/Janus_Default.jpg")} alt="woops..." />{" "}
              <img src={require("../../assets/God-Cards/Ne-Zha_Default.jpg")} alt="woops..." />{" "}
              <img src={require("../../assets/God-Cards/Bellona_Default.jpg")} alt="woops..." />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GodCards;
