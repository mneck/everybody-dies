import { Link } from "react-router-dom";

function CreatePage() {
  return (
    <div>
      <h1>What kind of document do you want to create?</h1>
      <div className="simple-page-buttons">
        <button>
          <h2>A will</h2>
        </button>
        <button>
          <p>What is a will?</p>
        </button>
        <button>
          <h2>A power of attorney</h2>
        </button>
        <button>
          <p>What is a power of attorney?</p>
        </button>
      </div>
    </div>
  );
}

export default CreatePage;
