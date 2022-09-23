import { useState } from "react";
import "./App.css";

export default function ColorGame() {
  let [color, setColor] = useState("255, 255, 255");
  let [message, setMessage] = useState(" ");
  let [rows] = useState([]);
  const chosen = Math.random() * (5 - 0) + 0;

  function generateColors() {
    setMessage("You have two attempts");
    if (rows !== undefined) rows.length = 0;
    for (let i = 0; i < 6; i++) {
      rows.push(
        Math.round(Math.random() * (255 - 1) + 1).toString() +
          ", " +
          Math.round(Math.random() * (255 - 1) + 1).toString() +
          ", " +
          Math.round(Math.random() * (255 - 1) + 1).toString()
      );
    }
    setColor(rows[Math.round(chosen)]);
  }

  function chosenOption(event) {
    if (message !== "Try again!") {
      if (Math.round(chosen).toString() === event.currentTarget.id) {
        setMessage("Correct!");
      } else setMessage("Try again!");
    } else generateColors();
  }

  return (
    <div className="card">
      <h1>
        Can you guess this color?
      </h1>
      <h1>
        <u>{color}</u>
      </h1>
      <div className="box">
        {rows.map((color, index) => {
          return (
            <div
              className="options"
              id={index}
              style={{ backgroundColor: `rgb(${color})` }}
              onClick={chosenOption}
            ></div>
          );
        })}
      </div>
      {message === " " ? (
        <button onClick={generateColors}>LET'S START!</button>
      ) : (
        <h2>{message}</h2>
      )}
      {message === "Correct!" ? (
        <button onClick={generateColors}>LET'S GO!</button>
      ) : (
        " "
      )}
      <br />
      <br />
    </div>
  );
}
