import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import THE_GANG_IMAGE from "../../assets/thegang.jpg";

const links = [
  {
    name: "Demo Playground",
    path: "/test",
  },
  {
    name: "Smite Builder",
    path: "/smite",
  },
];

export default function Home({ history }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header>
        <h1 style={{ color: "white" }}>The Gang Project</h1>
        <img className="icon" src={THE_GANG_IMAGE} alt="The gang" />
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {links.map(link => (
          <Button key={link.path} style={{ margin: 16 }} onClick={() => history.push(link.path)}>
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.object, // this is passed by <Route /> component from App.js
};

Home.defaultProps = {
  history: {},
};
