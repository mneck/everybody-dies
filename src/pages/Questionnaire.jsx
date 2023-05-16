import {
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import poaCues from "../constants/poaCues";
import willCues from "../constants/willCues";
import AddDocument from "../components/AddDocument";
import Footer from "../components/Footer";

function Questionnaire() {
  const location = useLocation();
  const type = new URLSearchParams(location.search).get(
    "type"
  );

  let cues;
  type === "poa" ? (cues = poaCues) : (cues = willCues);

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = cues.map((e) => {
    return e.cue;
  });

  const paras = cues.map((e) => {
    return e.para;
  });

  const visibility = cues.map((e) => {
    return e.inputIsVisible;
  });

  const inputType = cues.map((e) => {
    return e.inputType;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const cueId = cues[currentQuestion].cueId;
    const formData = Object.fromEntries(data.entries());
    formData[cueId] = formData[currentQuestion.toString()];
    delete formData[currentQuestion.toString()];
    const newAnswers = { ...answers, ...formData };
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
    e.target.reset();
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <form onSubmit={handleSubmit}>
          <h1>{questions[currentQuestion]}</h1>
          <p>{paras[currentQuestion]}</p>

          {visibility[currentQuestion] ? (
            <input
              type={inputType[currentQuestion]}
              name={currentQuestion}
            />
          ) : (
            <span></span>
          )}
          <div>
            <span>
              <button type="submit">Next</button>
            </span>
          </div>
        </form>
      ) : (
        <div>
          <h1>Thank you for your answers!</h1>
          <p>
            Give your document a title and click submit.
          </p>

          <pre>{JSON.stringify(answers, null, 2)}</pre>
          <AddDocument answers={answers} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Questionnaire;
