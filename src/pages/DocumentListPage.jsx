import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth-Context";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function DocumentListPage() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect the user to the homepage if not LoggedIn
      navigate("/");
    }
  }, [isLoggedIn]);

  const [documents, setDocuments] = useState([]);

  const getAllDocuments = () => {
    axios
      .get(`${API_URL}/api/documents`)
      .then((response) => setDocuments(response.data))
      .catch((error) => console.log(error));
  };

  // This effect runs only once after the initial render
  // by setting the empty dependency array - []

  useEffect(() => {
    getAllDocuments();
  }, []);
  {
    console.log(documents);
  }

  return (
    <div>
      <div className="app-vh-container">
        <h2>My Documents</h2>
        {documents.map((document) => {
          return (
            <div key={document._id}>
              <h3>
                <Link to={`/documents/${document._id}`}>
                  {document.title}
                </Link>
              </h3>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default DocumentListPage;
