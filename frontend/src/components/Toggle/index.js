import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.css";


export default function Toggle({ style }) { 
    const [state, setState] = useState(true);

    return (
        <button
            onClick={() => {
                setState(!state);
            }}
            className="Toggle" style={style}
        >
            {state ? "LOGIN" : "LOGOUT"}
        </button>
    );
};

Toggle.propTypes = {
    style: propTypes.object
};

Toggle.defaultProps = {
    style: {}
};
