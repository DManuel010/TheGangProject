import React from "react";
import logo from "./assets/thegang.jpg";
import "./App.css";
import Button from "./components/Button";
import Div from "./components/DynamicDiv";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="LearnReact">learn react</div>

        <img src={logo} className="App-logo" alt="logo" />

        <Button
          style={{ marginTop: 128 }}
          onClick={() => {
            window.alert("Me Me Big Boi Gang");
          }}
        >
          Click Me
        </Button>
        <Div style={{ marginTop: 20 }} />
      </header>
    </div>
  );
}

export default App;
