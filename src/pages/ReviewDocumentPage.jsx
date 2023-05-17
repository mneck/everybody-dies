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
  const [documentData, setDocumentData] = useState(null);

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
    getDocument(documentId);
  }, []);

  useEffect(() => {
    console.log("Document data before:", documentData);
    if (documentData) {
      // Set initial answer values based on document data
      console.log("Setting answers:");
      setAnswers([...documentData.answers]);
      setTitle(documentData.title);
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

  const handleFormUpdate = (e) => {
    e.preventDefault();
    const requestBody = { title, answers };
    axios
      .put(
        `${API_URL}/api/documents/${documentId}`,
        requestBody
      )
      .then((response) => {
        setDocumentData(response.data);
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

  function returnPoa() {
    return (
      <div id="content" className="review-field">
        <h3>
          <pre>Power of Attorney</pre>
        </h3>
        <pre>
          <p>
            This GENERAL POWER OF ATTORNEY is given on{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            by{" "}
            {/*
          function getAnswerByCueId(arr, cueId) {arr.find()}
        
        */}
            {getAnswerByCueId(answers, CueIds.YourName)}: of{" "}
            {getAnswerByCueId(answers, CueIds.YourAddress)}.
          </p>
        </pre>

        <pre>
          <p>I appoint the following person:</p>
        </pre>

        <pre>
          <p>
            {"      "}
            ##Name of Attorney, of ##Address, Vancouver
          </p>
        </pre>

        <pre>
          <p>
            to be my attorney in accordance with the{" "}
            <i>Power of Attorney Act</i> and to do on my
            behalf anything that I can lawfully do by an
            attorney.
          </p>
        </pre>

        <pre>
          <p>
            Power of Attorney may be exercised during any
            subsequent mental infirmity on my part.
          </p>
        </pre>

        <pre>
          <p>
            I revoke all other powers of attorney previously
            granted by me.
          </p>
        </pre>

        <pre>
          <p>
            <b>Executions(s)</b>
          </p>
        </pre>
      </div>
    );
  }

  function returnWill() {
    return (
      <div id="content" className="review-field">
        <h3>
          <pre>Will</pre>
        </h3>
        <pre>
          <p>
            This GENERAL POWER OF ATTORNEY is given on{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            by{" "}
            {/*
            function getAnswerByCueId(arr, cueId) {arr.find()}
          
          */}
            {getAnswerByCueId(answers, CueIds.YourName)}: of{" "}
            {getAnswerByCueId(answers, CueIds.YourAddress)}.
          </p>
        </pre>

        <pre>
          <p>I appoint the following person:</p>
        </pre>

        <pre>
          <p>
            {"      "}
            ##Name of Attorney, of ##Address, Vancouver
          </p>
        </pre>

        <pre>
          <p>
            to be my attorney in accordance with the{" "}
            <i>Power of Attorney Act</i> and to do on my
            behalf anything that I can lawfully do by an
            attorney.
          </p>
        </pre>

        <pre>
          <p>
            Power of Attorney may be exercised during any
            subsequent mental infirmity on my part.
          </p>
        </pre>

        <pre>
          <p>
            I revoke all other powers of attorney previously
            granted by me.
          </p>
        </pre>

        <pre>
          <p>
            <b>Executions(s)</b>
          </p>
        </pre>
      </div>
    );
  }

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
            {console.log(
              "Displaying Answers",
              answers[0]?.answer
            )}
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

            {documentData.documentType === "poa"
              ? returnPoa()
              : returnWill()}

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
