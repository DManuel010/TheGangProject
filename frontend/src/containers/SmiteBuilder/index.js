import React from "react";
import WebsiteBG from "../../components/WebsiteBG";
import WebsitePC from "../../components/WebsitePC";
import WebsiteScrollbar from "../../components/WebsiteScrollbar";
import WebsiteText from "../../components/WebsiteText";
import Clock from "../../components/Clock";
import Toggle from "../../components/Toggle";
import "./index.css";

export default function SmiteBuilder() {
  return (
    <div
      className="backbody"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <WebsiteBG />
      <WebsitePC />
      <WebsiteScrollbar />
      <WebsiteText />
      <Clock />
      <Toggle />
    </div>
  );
}
