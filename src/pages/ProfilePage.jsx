import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>

      <button>
        <h2>Create a Document</h2>
      </button>

      <h2>My Documents</h2>
      <button>
        <p>Document 1</p>
      </button>
      <div></div>
      <button>
        <p>Document 2</p>
      </button>

      <h2>My Data</h2>
      <button>
        <p>Document 1 Data</p>
      </button>
      <button>
        <p>Document 2 Data</p>
      </button>
    </div>
  );
}

export default ProfilePage;
