import { useState, useEffect } from "react";
import "./App.css";

export default function ColorGame() {
  let [color, setColor] = useState("000,000,000");
  let [rows, setRows] = useState([]);
  const chosen = Math.random() * (5 - 0) + 0;

  function formatString(myString) {
    let formatted = "";
    for (var i = 0; i < myString.length; i++) {
      formatted = formatted + myString.charAt(i);
      if (i === 2 || i === 5) formatted = formatted + ",";
    }
    return formatted;
  }

  function generateColors() {
    for (let i = 0; i < 6; i++) {
      rows.push(
        formatString(Math.round(Math.random() * 1000000000).toString())
      );
    }
    setColor(rows[Math.round(chosen)]);
  }

  return (
    <div className="card">
      <h1>
        What color is this? <br />
        <u>{color}</u>
      </h1>
      <div className="box">
        {rows.map((color, index) => {
          console.log(`rgb(${color})`);
          return (
            <div
              className="options"
              id={index}
              style={{ backgroundColor: `rgb(${color})` }}
            ></div>
          );
        })}
      </div>
      <br />
      <button onClick={generateColors}>LET'S GO!</button>
      <br />
      <br />
    </div>
  );
}
