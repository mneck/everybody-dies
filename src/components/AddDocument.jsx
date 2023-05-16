import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth-Context";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function AddDocument(props) {
  const [title, setTitle] = useState("Title goes here");
  const { user } = useContext(AuthContext);
  const [answers, setAnswers] = useState(props.answers);
  const [documentType, setdocumentType] = useState("poa");
  console.log(user);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      owner: user._id,
      answers,
      documentType,
    };

    axios
      .post(`${API_URL}/api/submitAnswers`, requestBody)
      .then(console.log(requestBody))
      .then((response) => {
        navigate("/review");
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
