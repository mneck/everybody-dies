import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function ProfilePage() {
  return (
    <div>
      <div className="app-vh-container">
        <h1>My Profile</h1>
        <Link to="/create">
          <button>
            <h2>Create a Document</h2>
          </button>
        </Link>
        <h2>My Documents</h2>
        <Link to="/doc1">
          <button>
            <p>Document 1</p>
          </button>
        </Link>
        <div></div>
        <Link to="/doc2">
          <button>
            <p>Document 2</p>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
