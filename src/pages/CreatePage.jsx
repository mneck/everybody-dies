import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

function CreatePage() {
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
      <h1>What kind of document do you want to create?</h1>
      <div className="simple-page-buttons">
        <button>
          <h2>A will</h2>
        </button>
        <button onClick={handleModalClick}>
          <p>What is a will?</p>
        </button>
        {showModal && (
          <Modal handleCloseModal={handleCloseModal}>
            <p className="modal-text">
              A will provides instructions on how to
              distribute your belongings and assets after
              you pass away. One or more executors are
              assigned to carry out this distribution.
            </p>
            <button onClick={handleCloseModal}>
              Close
            </button>
          </Modal>
        )}
        <button>
          <h2>A power of attorney</h2>
        </button>
        <button>
          <p onClick={handleModalClick}>
            What is a power of attorney?
          </p>
        </button>
        {showModal && (
          <Modal handleCloseModal={handleCloseModal}>
            <p className="modal-text">
              A power of attorney grants a person (an
              "attorney") the power to handle another
              person's legal and financial affairs. If, for
              example, you want your spouse to be able to
              withdraw money from your bank account or file
              your taxes, a power of attorney would give
              your spouse the ability to do so.
            </p>
            <button onClick={handleCloseModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
      <Footer />
    </>
  );
}
export default CreatePage;
