import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />

        <footer>
          This homework is{" "}
          <a
            href="https://github.com/luciejachimova/weather-homework-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>{" "}
          by Lucie Jáchimová.
        </footer>
      </div>
    </div>
  );
}
