import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

const AuthInput = ({ label, labelProps, ...props }) => (
  <div className="authinput">
    <span className="authinput-label" {...labelProps}>
      {label}:{" "}
    </span>
    <input className="authinput-input" {...props} />
  </div>
);

AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelProps: PropTypes.object,
};

AuthInput.defaultProps = {
  labelProps: {},
};

export default function AuthForm({ submitText, onClick, ...buttonProps }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="authform">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AuthInput label="Email" autoComplete="off" onChange={e => setEmail(e.target.value)} />
        <AuthInput label="Password" type="password" autoComplete="off" onChange={e => setPassword(e.target.value)} />
      </div>
      <button
        className="submit-button"
        onClick={e => {
          e.preventDefault();
          onClick(email, password);
        }}
        {...buttonProps}
      >
        {submitText}
      </button>
    </form>
  );
}

AuthForm.propTypes = {
  submitText: PropTypes.string,
};

AuthForm.defaultProps = {
  submitText: "Submit",
};
