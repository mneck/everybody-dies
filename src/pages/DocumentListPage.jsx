import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth-Context";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function DocumentListPage() {
  const [documents, setDocuments] = useState([]);

  // const { user } = useContext(AuthContext);
  // console.log("User", user);

  // const getAllDocuments = () => {
  //   axios
  //     .get(`${API_URL}/api/doc/${user?._id}`)
  //     .then((response) => setDocuments(response.data))
  //     .catch((error) => console.log(error));
  // };

  const getAllDocuments = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/doc`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log("Data here", response.data),
          setDocuments(response.data);
      })
      .catch((error) => console.log(error));
  };

  // This effect runs only once after the initial render
  // by setting the empty dependency array - []

  useEffect(() => {
    console.log("useEffect is called");
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
