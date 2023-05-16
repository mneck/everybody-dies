import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function AddDocument(props) {
  const [title, setTitle] = useState("Title goes here");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, answers: props.answers };

    axios
      .post(`${API_URL}/api/submitAnswers`, requestBody)
      .then(console.log(requestBody))
      .then((response) => {
        // Reset the state
        props.setAnswers({});
        setTitle("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
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
