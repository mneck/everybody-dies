import CueIds from "../constants/CueIds";

function WillForm({ answers }) {
  console.log(answers);
  const getAnswerByCueId = (arr, cueId) =>
    arr.find((el) => el.cueId === cueId)?.answer;

  return (
    <div id="content" className="review-field">
      <p>
        <pre>
          This is the last Will of me,{" "}
          {getAnswerByCueId(
            answers,
            CueIds.YourName
          ).toUpperCase()}
          , presently of{" "}
          {getAnswerByCueId(answers, CueIds.YourCity)}.
        </pre>
      </p>

      <p>
        <pre>
          1. I revoke all my prior wills and codicils.
        </pre>
      </p>

      <p>
        <b>
          <pre>Appointment of Executor and Trustee</pre>
        </b>
      </p>

      <p>
        <pre>
          2. In this Will I refer to the person who is the
          Executor of my Will and the Trustee of my Estate
          as my "Trustee".
        </pre>
      </p>

      <p>
        <pre>
          3. (a) I appoint my{" "}
          {getAnswerByCueId(
            answers,
            CueIds.ExecutorRelation
          )}
          ,{" "}
          {getAnswerByCueId(
            answers,
            CueIds.ExecutorName
          ).toUpperCase()}
          , of{" "}
          {getAnswerByCueId(answers, CueIds.ExecutorCity)}{" "}
          to be my Trustee.
        </pre>
      </p>

      <p>
        <pre>
          (b) If my{" "}
          {getAnswerByCueId(
            answers,
            CueIds.ExecutorRelation
          )}
          , {getAnswerByCueId(answers, CueIds.ExecutorName)}
          , is unwilling or unable to act or continue to act
          as my Trustee, I appoint my{" "}
          {getAnswerByCueId(
            answers,
            CueIds.AltExecutorRelation
          )}
          ,{" "}
          {getAnswerByCueId(
            answers,
            CueIds.AltExecutorName
          ).toUpperCase()}{" "}
          , of{" "}
          {getAnswerByCueId(
            answers,
            CueIds.AltExecutorCity
          )}
          to be my Trustee.
        </pre>
      </p>

      <p>
        <b>
          <pre>Trustee to Administer My Estate</pre>
        </b>
      </p>

      <p>
        <pre>
          4. I give my Trustee all my property of every kind
          and wherever located to administer as I direct in
          this Will.
        </pre>
        <pre>
          In administering my estate, my Trustee may convert
          or retain my estate as set out in this Will.
        </pre>
      </p>

      <p>
        <pre>
          5. I direct my Trustee to hold that property on
          the following trusts:
        </pre>
      </p>

      <p>
        <b>
          <pre>Debts to Be Paid from My Estate</pre>
        </b>
      </p>

      <p>
        <pre>(a) to pay out of my estate:</pre>
      </p>

      <p>
        <pre>
          (i) my debts, including income taxes payable up to
          and including the date of my death;
        </pre>
      </p>

      <p>
        <pre>
          (ii) my funeral and other expenses related to this
          Will and my death; and
        </pre>
      </p>

      <p>
        <pre>
          (iii) all estate, gift, inheritance, succession,
          and other death taxes or duties payable in respect
          of all property passing on my death;
        </pre>
      </p>

      <p>
        <b>
          <pre>Residue of Estate</pre>
        </b>
      </p>

      <p>
        <pre>
          (b) to give the residue of my estate (the
          "Residue") to my{" "}
          {getAnswerByCueId(answers, CueIds.HeirRelation)},{" "}
          {getAnswerByCueId(
            answers,
            CueIds.HeirName
          ).toUpperCase()}
          , of {getAnswerByCueId(answers, CueIds.HeirCity)},
          if they are alive on the date that is 30 days
          after the date of my death;
        </pre>
      </p>

      <p>
        <pre>
          (c) if{" "}
          {getAnswerByCueId(
            answers,
            CueIds.HeirName
          ).toUpperCase()}
          is not alive on the date that is 30 days after the
          date of my death, to give the Residue to my{" "}
          {getAnswerByCueId(
            answers,
            CueIds.AltHeirRelation
          )}
          ,{" "}
          {getAnswerByCueId(
            answers,
            CueIds.AltHeirName
          ).toUpperCase()}
          , of{" "}
          {getAnswerByCueId(answers, CueIds.AltHeirCity)}.
        </pre>
      </p>

      <p>
        <b>
          <pre>Funeral Wishes</pre>
        </b>
      </p>

      <p>
        <pre>
          (c) I want my remains to be{" "}
          {getAnswerByCueId(
            answers,
            CueIds.DispositionOfRemains
          )}
          .
        </pre>
      </p>

      <p>
        <pre>
          I have signed this Will on{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
          })}{" "}
          ____,{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
          })}
        </pre>
      </p>
    </div>
  );
}

export default WillForm;
