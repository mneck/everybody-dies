import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth-Context";

function Footer() {
  const { isLoggedIn, user, logOutUser } =
    useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn && (
        <div className="footer-items">
          <div>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button onClick={logOutUser}>Logout</button>
            </Link>
          </div>
          <span>{user && user.name}</span>
        </div>
      )}
    </nav>
  );
}

export default Footer;
