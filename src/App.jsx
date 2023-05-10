import { useState } from "react";
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
          Death is one click closer: {count}
        </button>
      </div>
    </>
  );
}

export default App;
