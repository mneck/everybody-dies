import { Link } from "react-router-dom";
import { useState } from "react";
import AboutModal from "../components/AboutModal";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handlePlanClick = () => {
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
        <button onClick={handlePlanClick}>
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
        <AboutModal handleCloseModal={handleCloseModal}>
          <p className="modal-text">
            Everybody Dies gives you tools to consider how
            to create specific estate planning documents.
            Here's how it works: a chatbot prompts asks you
            questions and gives suggestions to collect
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
            This application and any documents it generates
            are created for demonstration purposes only.
            None of the content on this website is intended
            as legal advice. If you require legal services,
            contact a lawyer, who can ensure your documents
            meet your needs and are executed correctly.
          </p>
        </AboutModal>
      )}
    </>
  );
}

export default HomePage;
