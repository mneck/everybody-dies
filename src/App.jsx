import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Everybody dies.</h1>

        <h2>Plan for it.</h2>
        <div className="home-page-buttons">
          <button className="read-the-docs">Sign Up</button>
          <button className="read-the-docs">Log In</button>
        </div>
      </div>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
        >
          About {count}
        </button>
      </div>
    </>
  );
}

export default App;
