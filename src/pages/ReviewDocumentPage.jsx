import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function ReviewDocumentPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { documentId } = useParams();
  // useParams is not used correctly here
  // should be ?documentId= [useParams()] http://localhost:5173/documents/64638c917f11e39d0072441c

  const navigate = useNavigate();

  const getDocument = (documentId) => {
    console.log("Single Document", documentId, API_URL);
    axios
      .get(`${API_URL}/api/documents/${documentId}`)
      .then((response) =>
        console.log("Single Document2", response)
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDocument(documentId);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

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
    <div className="EditDocumentPage">
      <h3>Edit my documents</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
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
    </div>
  );
}

export default ReviewDocumentPage;
