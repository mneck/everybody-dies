import { Link } from "react-router-dom";
import { useState } from "react";
import poaCues from "../constants/poaCues";

function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = poaCues.map((e) => {
    return e.cue;
  });

  const paras = poaCues.map((e) => {
    return e.para;
  });

  const visibility = poaCues.map((e) => {
    return e.inputIsVisible;
  });

  const inputType = poaCues.map((e) => {
    return e.inputType;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    setAnswers({ ...answers, ...formData });
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
          <button type="submit">Next</button>
        </form>
      ) : (
        <div>
          <h1>Thank you for your answers!</h1>
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Questionnaire;
