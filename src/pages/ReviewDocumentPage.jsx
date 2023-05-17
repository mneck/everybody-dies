import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import poaCues from "../constants/poaCues";
import willCues from "../constants/willCues";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

function ReviewDocumentPage(props) {
  const [title, setTitle] = useState("Change title to...");
  const [answers, setAnswers] = useState([]);
  const [documentData, setDocumentData] = useState(null);

  const { documentId } = useParams();

  const navigate = useNavigate();

  const getDocument = (documentId) => {
    axios
      .get(`${API_URL}/api/documents/${documentId}`)
      .then((response) => setDocumentData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDocument(documentId);
  }, []);

  useEffect(() => {
    if (documentData) {
      // Set initial answer values based on document data
      setAnswers([...documentData.answers]);
    }
  }, [documentData]);

  // let cues;
  // documentData.documentType === "poa"
  //   ? (cues = poaCues)
  //   : (cues = willCues);

  const handleAnswerChange = (index, value) => {
    // Create new answers array with updated value at specified index
    const newAnswers = [...answers];
    newAnswers[index].answer = value;
    setAnswers(newAnswers);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, answers };
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

  function handleCopy() {
    const content =
      document.getElementById("content").innerText;
    navigator.clipboard.writeText(content);
  }

  // let cues;
  // documentData.DocumentType === "poa"
  //   ? (cues = poaCues)
  //   : (cues = willCues);

  //  const cueTexts = cues.reduce((acc, curr) => {
  //   acc[curr.cueId] = curr.cueText;
  //   return acc;
  // }, {});

  return (
    <div>
      <div className="EditDocumentPage app-vh-container">
        <h3>Edit my document</h3>
        {documentData ? (
          <>
            <h4>{documentData.title}</h4>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {answers.map((answer, index) => (
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
            ))}
            <form onSubmit={handleFormSubmit}>
              <div>
                <button type="submit">
                  Update Document
                </button>
              </div>
            </form>

            <button onClick={handleCopy}>
              Copy text to clipboard
            </button>

            <div id="content" className="review-field">
              <h3>
                <pre>Power of Attorney</pre>
              </h3>
              <p>
                <pre>
                  This GENERAL POWER OF ATTORNEY is given on{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  by ##Name of ##Address.
                </pre>
              </p>

              <p>
                <pre>I appoint the following person:</pre>
              </p>

              <p>
                <pre>
                  {"     "}##Name of Attorney, of ##Address,
                  Vancouver
                </pre>
              </p>

              <p>
                <pre>
                  to be my attorney in accordance with the{" "}
                  <i>Power of Attorney Act</i> and to do on
                  my behalf anything that I can lawfully do
                  by an attorney.
                </pre>
              </p>

              <p>
                <pre>
                  Power of Attorney may be exercised during
                  any subsequent mental infirmity on my
                  part.
                </pre>
              </p>

              <p>
                <pre>
                  I revoke all other powers of attorney
                  previously granted by me.
                </pre>
              </p>

              <p>
                <pre>
                  <b>Executions(s)</b>
                </pre>
              </p>
            </div>

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
