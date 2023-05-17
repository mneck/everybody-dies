import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function ReviewDocumentPage(props) {
  const [title, setTitle] = useState("");
  let [documentData, setdocumentData] = useState("");

  const { documentId } = useParams();

  const navigate = useNavigate();

  const getDocument = (documentId) => {
    axios
      .get(`${API_URL}/api/documents/${documentId}`)
      .then((response) => setdocumentData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDocument(documentId);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title };

    axios
      .put(
        `${API_URL}/api/documents/${documentId}`,
        requestBody
      )
      .then((response) => {
        navigate(`/documents/${documentId}`);
      });
  };

  const deleteDocument = () => {
    console.log("Deleting", documentId);

    axios
      .delete(`${API_URL}/api/documents/${documentId}`)
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="EditDocumentPage app-vh-container">
        <h3>Edit my document</h3>
        {documentData ? (
          <>
            <h4>{documentData.title}</h4>
            {console.log("Answers", documentData.answers)}
            <form onSubmit={handleFormSubmit}>
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <button type="submit">Update Document</button>
            </form>

            <button onClick={deleteDocument}>
              Delete Document
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ReviewDocumentPage;
