import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth-Context";

function Footer() {
  const { isLoggedIn, user, logOutUser } =
    useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      {isLoggedIn && (
        <div>
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
