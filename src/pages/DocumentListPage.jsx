import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function DocumentListPage() {
  const [documents, setDocuments] = useState([]);

  const getAllDocuments = () => {
    axios
      .get(`${API_URL}/api/documents`)
      .then((response) => setDocuments(response.data))
      .catch((error) => console.log(error))
  }

  // This effect runs only once after the initial render
  // by setting the empty dependency array - []

  useEffect(() => {
    getAllDocuments();
  }, []);

  return (
    <div>
      <h1>My Documents</h1>
      {
      {documents.map((document) => {
        return (
          <div key={document._id}>
            <h2>
              <Link to={`/documents/${document._id}`}>
                {document.title}
              </Link>
            </h2>
            <p>{document.answers}</p>
          </div>
        );
      })}

    }
    </div>
  );
}

export default DocumentListPage;
