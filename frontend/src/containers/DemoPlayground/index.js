import React from "react";
import Button from "../../components/Button";
import Div from "../../components/DynamicDiv";

export default function DemoPlayground() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header className="App-header">
        <Button
          style={{ marginTop: 128 }}
          onClick={() => {
            window.alert("Me Me Big Boi Gang");
          }}
        >
          Click Me
        </Button>
        <Div style={{ marginTop: 20, color: "#ff7979" }} />
      </header>
    </div>
  );
}
