import React, { useState } from "react";
// @ts-ignore
import "./App.css";
import Scanner from "../Scanner/Scaner";

function App() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result) => {
    setResult(result);
  };
  return (
    <div className="App" style={{ width: "100vw" }}>
      <p>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}

export default App;
