import React from "react";
import "../App.css";

function AboutModal({ handleCloseModal, children }) {
  return (
    <>
      {children}
      <button onClick={handleCloseModal}>
        <p>Close</p>
      </button>
    </>
  );
}

export default AboutModal;
