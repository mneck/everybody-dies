import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Everybody dies.</h1>
        <h2>Plan for it.</h2>
        <div className="home-page-buttons">
          <p className="read-the-docs">Sign Up</p>
          <p className="read-the-docs">Log In</p>
        </div>
      </div>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
