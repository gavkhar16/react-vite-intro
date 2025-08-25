import React, { useState, useEffect } from "react";
import "./Test.css";

export  const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("цифра поменялась", count);
  }, [count]);

  return (
    <div className="counter-container">
      <h1>{count}</h1>
      <div className="button-group">
        <button className="plus" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="minus" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

