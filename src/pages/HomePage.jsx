import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
    if (showModal === true) {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <h1>Everybody dies.</h1>
        <button onClick={handleModalClick}>
          <h2>Plan for it.</h2>
        </button>
        <div className="simple-page-buttons">
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </div>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <p className="modal-text">
            Everybody Dies gives you tools to create estate
            planning documents. A chatbot prompts you with
            questions and suggestions to collect
            information. That data is then used to generate
            drafts of a will or power of attorney based on
            precedents published by the Continuing Legal
            Education Society of British Columbia. You can
            read more about these documents{" "}
            <a href="https://www.cle.bc.ca/wills-and-personal-planning-precedents-an-annotated-guide">
              here
            </a>
            .
          </p>
          <p className="modal-text">
            Although these documents and questions would be
            most relevant to residents of British Columbia,
            Canada, the questions, information, and
            documents provided in this web application
            should be useful to anyone curious about making
            a will or other estate planning documents.
          </p>
          <p className="modal-text">
            This application and any documents it generates
            are created for demonstration purposes only.
            None of the content on this website is intended
            as legal advice. If you require legal services,
            contact a lawyer, who can ensure your documents
            meet your needs and are executed correctly.
          </p>
        </Modal>
      )}
    </>
  );
}

export default HomePage;
