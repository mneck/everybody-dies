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
      <div className="app-vh-container create-page-items">
        <h1>I want to create a:</h1>
        <Link to="/create/will">
          <button>
            <h1>will</h1>
          </button>
        </Link>
        <Link to="/create/poa">
          <button>
            <h1>power of attorney</h1>
          </button>
        </Link>
        <button>
          <h2 onClick={handleModalClick}>
            What are these things?
          </h2>
        </button>
        {showModal && (
          <Modal handleCloseModal={handleCloseModal}>
            <p className="modal-text">
              A will provides instructions on how to
              distribute your belongings and assets after
              you pass away. You can assign one or more
              executors to handle this distribution.
            </p>
            <p className="modal-text">
              A power of attorney grants a person (an
              "attorney") the power to handle another
              person's legal and financial affairs. If, for
              example, you want your spouse to be able to
              withdraw money from your bank account or file
              your taxes, a power of attorney would give
              your spouse the ability to do so.
            </p>
          </Modal>
        )}
      </div>
      <Footer />
    </>
  );
}
export default CreatePage;
