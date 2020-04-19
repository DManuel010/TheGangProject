import React, { useContext, useState } from "react";
import FirebaseContext from "../../context/FirebaseContext";
import "./index.css";
import AuthForm from "../../components/Auth/AuthForm";
import { Redirect } from "react-router-dom";

export default function LoginPage({ redirectTo }) {
  const {
    auth: { signIn, signUp, currentUser },
  } = useContext(FirebaseContext);
  const [message, setMessage] = useState("");
  if (currentUser) {
    return <Redirect to={redirectTo} />;
  }
  return (
    <div className="login-container">
      <h1 className="login-title">Welcome to The Gane Website</h1>
      <p className="login-subtitle">
        Seems like you are trying to access a protected route and is not authorized. Please login!
      </p>
      <p className="login-subtitle">{message}</p>
      <div className="login-content">
        <div className="signup-content">
          <h2 className="login-title">Sign Up</h2>
          <AuthForm
            onClick={async (username, password) => {
              try {
                setMessage("Signing up");
                await signUp(username, password);
                setMessage("Sign up success");
              } catch (err) {
                setMessage(`Sign up failed (${err.message})`);
              }
            }}
          />
        </div>
        <div className="signin-content">
          <h2 className="login-title">Sign In</h2>
          <AuthForm
            onClick={async (username, password) => {
              try {
                setMessage("Signing in");
                await signIn(username, password);
              } catch (err) {
                setMessage(`Sign in failed (${err.message})`);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
