import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth-Context";

function Footer() {
  const { isLoggedIn, user, logOutUser } =
    useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn && (
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/profile">
            <button>Profile</button>
          </Link>

          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </div>
      )}
    </nav>
  );
}

export default Footer;
