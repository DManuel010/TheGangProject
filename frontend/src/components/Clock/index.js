import React, { useState, useRef, useEffect } from "react";

// one thing to note is that every time a state or a props change, the component re-render
// this means that this function run again
const Clock = () => {
  const timerIDRef = useRef(); // a ref is something that will persist between every render
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setDate(new Date());
    };
    timerIDRef.current = setInterval(() => tick(), 1000);
    return () => {
      // cleanup function
      clearInterval(timerIDRef);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "#ff7979" }}>
      <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Hello, world!</h1>
      <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        It is {date.toLocaleTimeString()}.
      </h2>
    </div>
  );
};

export default Clock;
