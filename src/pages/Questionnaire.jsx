import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/Auth-Context";
import { useState, useEffect, useContext } from "react";
import poaCues from "../constants/poaCues";
import willCues from "../constants/willCues";
import AddDocument from "../components/AddDocument";
import Footer from "../components/Footer";

function Questionnaire() {
  const { user } = useContext(AuthContext);
  // console.log(
  //   "AuthContext check",
  //   "User is",
  //   user,
  //   useContext(AuthContext)
  // );
  const location = useLocation();
  const type = new URLSearchParams(location.search).get(
    "type"
  );

  console.log(type);

  let cues;
  type === "poa" ? (cues = poaCues) : (cues = willCues);

  const [answers, setAnswers] = useState([]);
  // const [cueIds, setCueIds] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = cues.map((e) => {
    return e.cue;
  });

  const cueIds = cues.map((e) => {
    return e.cueId;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentCueId = cueIds[currentQuestion];
    const currentInput = e.target.querySelector(
      `[name="${currentQuestion}"]`
    );

    const currentAnswer = currentInput
      ? currentInput.value
      : "";

    if (currentAnswer.length > 0) {
      setAnswers([
        ...answers,
        {
          cueId: currentCueId.toString(),
          answer: currentAnswer.toString(),
        },
      ]);
    }
    e.target.reset();
    setCurrentQuestion(currentQuestion + 1);
  };

  // let answersArr = [answers];

  return (
    <div>
      <div className="app-vh-container">
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
              <button type="submit">Next</button>
            </div>
          </form>
        ) : (
          <div>
            <h1>Thank you for your answers!</h1>
            <p>
              Feel free to give your document a title. Click
              submit to save your answers.
            </p>

            <AddDocument answers={answers} type={type} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Questionnaire;
