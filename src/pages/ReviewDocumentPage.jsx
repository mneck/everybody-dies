import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import poaCues from "../constants/poaCues";
import willCues from "../constants/willCues";
import CueIds from "../constants/CueIds";
import Footer from "../components/Footer";
import PoaForm from "../components/PoaForm";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function ReviewDocumentPage(props) {
  const [answers, setAnswers] = useState([]);
  const [title, setTitle] = useState("");
  const [documentType, setDocumentType] = useState("");
  // const [documentData, setDocumentData] = useState([]);

  const getAnswerByCueId = (arr, cueId) =>
    arr.find((el) => el.cueId === cueId)?.answer;

  const { documentId } = useParams();

  const navigate = useNavigate();

  const getDocument = (documentId) => {
    axios
      .get(`${API_URL}/api/documents/${documentId}`)
      .then((response) => setDocumentData(response.data))
      .then(console.log("data"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const fetchData = async (documentId) => {
      try {
        const response = await axios.get(
          `${API_URL}/api/documents/${documentId}`
        );
        setAnswers(response.data.answers);
        setTitle(response.data.title);
        setDocumentType(response.data.documentType);
      } catch (error) {
        console.error("Error from backend", error);
      }
    };

    fetchData(documentId);
  }, []);

  const handleAnswerChange = (index, value) => {
    // Create new answers array with updated value at specified index
    const newAnswers = [...answers];
    newAnswers[index].answer = value;
    setAnswers(newAnswers);
  };

  const handleFormUpdate = (e) => {
    e.preventDefault();
    const requestBody = { title, answers };
    axios
      .put(
        `${API_URL}/api/documents/${documentId}`,
        requestBody
      )
      .then((response) => {
        setAnswers(response.data.answers);
        setTitle(response.data.title);
        setDocumentType(response.data.documentType);
        navigate(`/documents/`); // TODO: change to documents/documentId
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

  function handleCopy() {
    const content =
      document.getElementById("content").innerText;
    navigator.clipboard.writeText(content);
  }

  const getForm = () => {
    return documentType === "poa" ? (
      <PoaForm answers={answers} />
    ) : (
      <Footer />
    );
  };

  // let cues;
  // documentData.DocumentType === "poa"
  //   ? (cues = poaCues)
  //   : (cues = willCues);
  // Use ?.
  //  const cueTexts = cues.reduce((acc, curr) => {
  //   acc[curr.cueId] = curr.cueText;
  //   return acc;

  // TODO => Make a component for each type of document

  // }, {});

  return (
    <div>
      <div className="EditDocumentPage app-vh-container">
        <h3>Edit my document</h3>
        {title ? (
          <>
            <h4>{title}</h4>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {answers.map(
              (
                answer,
                index // TODO: rename answer here
              ) => (
                <div key={index}>
                  <p>{answer.cueId}</p>
                  <input
                    type="text"
                    name={answer.cueId}
                    value={answer.answer}
                    onChange={(e) =>
                      handleAnswerChange(
                        index,
                        e.target.value
                      )
                    }
                  />
                </div>
              )
            )}
            <form onSubmit={handleFormUpdate}>
              <div>
                <button type="submit">
                  Update document with new info
                </button>
              </div>
            </form>

            <button onClick={handleCopy}>
              Copy text to clipboard
            </button>

            {getForm()}

            <button onClick={deleteDocument}>
              Delete Document
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default ReviewDocumentPage;
