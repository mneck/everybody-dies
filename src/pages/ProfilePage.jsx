import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function ProfilePage() {
  return (
    <div>
      <div className="app-vh-container">
        <h1>My Profile</h1>
        <button>
          <h2>Create a Document</h2>
        </button>
        <h2>My Documents</h2>
        <button>
          <p>Document 1</p>
        </button>
        <div></div>
        <button>
          <p>Document 2</p>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
