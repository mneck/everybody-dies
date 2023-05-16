import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import DocumentListPage from "./DocumentListPage";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function ProfilePage() {
  const [documents, setDocuments] = useState([]);

  const getAllDocuments = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => setDocuments(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllDocuments();
  }, []);

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
        <DocumentListPage />
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
