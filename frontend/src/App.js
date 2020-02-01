import React from "react";
import WebsiteBG from "./components/WebsiteBG";
import WebsitePC from "./components/WebsitePC";
import WebsiteScrollbar from "./components/WebsiteScrollbar"
import WebsiteText from "./components/WebsiteText";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import "./App.css";
import Button from "./components/Button";
import Div from "./components/DynamicDiv";


function App() {
  return (
    <div className="App">
          <WebsiteBG />
          <WebsitePC />
          <WebsiteScrollbar />
          <WebsiteText />
          <Clock />
          <Toggle />
        <header className="App-header">
        <div className="LearnReact">learn react</div>

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
