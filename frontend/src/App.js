import React from "react";
import logo from "./assets/thegang.jpg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          style={{ marginTop: 128 }}
          onClick={() => {
            window.alert("Me Me Big Boi Gang");
          }}
        >
          Click Me
        </Button>
      </header>
    </div>
  );
}

export default App;
