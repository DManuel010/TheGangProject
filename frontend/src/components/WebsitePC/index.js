import React from "react";

const pcHeader = "Smite Builder";

const pcString = `Smite Builder is a comprehensive, next-gen team building software that utilizes SMITE.API and it's underlying
algorithms to determine the best team composition for you. The team chosen for you can be based on your preferred
gods / personal god performance, the enemy team composition and draft process, and even the overall community's
god statistics. Don't worry about a thing. Your smite games will be won because you listened to us.`;

const pcSlogan = "Draft. Pick. Win.";

const pcLink = "Get Started";

const WebsitePC = () => (
  <div className="page-content">
    <h1>{pcHeader}</h1>
    <p>{pcString}</p>
    <h2> {pcSlogan} </h2>
    <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">
      {pcLink}
    </a>
  </div>
);

export default WebsitePC;
