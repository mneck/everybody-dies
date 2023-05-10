import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>
        <h1>Everybody dies.</h1>
        <button>
          <h2>Plan for it.</h2>
        </button>
        <div className="home-page-buttons">
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </div>
      <div className="card"></div>
    </>
  );
}

export default HomePage;
