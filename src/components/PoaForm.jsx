import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth-Context";
import CueIds from "../constants/CueIds";
import getAnswerByCueId from "../pages/ReviewDocumentPage";

function PoaForm({ answers }) {
  console.log(
    "Unique Answers!!! For our POA component :D Woo!!! :",
    answers
  );

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

export default PoaForm;
