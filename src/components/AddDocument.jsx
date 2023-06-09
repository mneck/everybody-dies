import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth-Context";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function AddDocument({ answers, type }) {
  // console.log("Type check:", type);
  const { user } = useContext(AuthContext);
  console.log("AuthContext check", user);
  const [title, setTitle] = useState("Title goes here");
  // const [documentType, setdocumentType] = useState("poa");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      owner: user?._id,
      answers,
      documentType: type,
    };

    console.log("Request body:", requestBody);

    // user._id &&
    axios
      .post(`${API_URL}/api/submitAnswers`, requestBody)
      .then(console.log(requestBody))
      .then((response) => {
        navigate(`/documents/${response.data._id}`);
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
