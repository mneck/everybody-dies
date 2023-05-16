import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function AddDocument(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description };

    axios
      .post(`${API_URL}/api/documents`, requestBody)
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshDocuments();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Add Document</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDocument;
