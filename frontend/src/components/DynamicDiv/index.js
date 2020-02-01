import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

export default function Div({ style}) {
  const [state, setState] = useState("Initial Text");
  return (
    <>
      <div className="DynamicDiv" style={style}>
        {state}
      </div>
      <Button
        onClick={() => { 
          setState("New text");
        }}>
        Change Text
      </Button>
    </>
  );
}

Div.propTypes = {
  style: PropTypes.object,
};

Div.defaultProps = {
  style: {},
};
