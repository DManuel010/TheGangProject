import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function Button({ onClick, children, style }) {
  return (
    <button className="GangButton" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

// this is where you define all the data that will come in. We call them props
Button.propTypes = {
  onClick: PropTypes.func, // onClick is a function, which means you can pass a set of operation here
  children: PropTypes.node, // children is a special props, it basically anything that goes between the component tags. A node could be either a string orcomponent(s)
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: () => {},
  children: null,
  style: {},
};
