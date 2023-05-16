import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function EditDocumentsPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { documentId } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/api/documents/${documentId}`)
  //     .then((response) => {
  //       const oneDocument = response.data;
  //       setTitle(oneDocument.title);
  //       setDescription(oneDocument.description);
  //     })
  //     .catch((error) => console.log(error));
  // }, [documentId]);

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

  const deleteProject = () => {
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

      <button onClick={deleteProject}>
        Delete Document
      </button>
    </div>
  );
}

export default EditDocumentsPage;
