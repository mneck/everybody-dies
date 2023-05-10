import React from "react";
import "../App.css";

const AboutModal = ({ setIsOpen }) => {
  return (
    <>
      <div
        className="modal"
        onClick={() => setIsOpen(false)}
      />
      <h1>Hello</h1>
      <p>
        Everybody Dies gives you tools to consider how to
        create estate planning documents, like wills and
        powers of attorney. A chatbot prompts users with
        questions and suggestions to collect information.
        That data is then used to generate drafts of wills
        or powers of attorney based on precedents created in
        accordance with the
        <a href="https://canlii.ca/t/55nwv">
          Wills, Estates and Succession Act
        </a>{" "}
        and the
        <a href="https://canlii.ca/t/55xb8">
          Power of Attorney Act
        </a>{" "}
        of British Columbia.
      </p>
      <p>
        This application and any documents it generates are
        created for demonstrative and educational purposes
        only, and none of the content on this website is
        intended as legal advice. If you need legal
        services, contact a lawyer.
      </p>
    </>
  );
};

export default Modal;
