import "./App.css";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import Questionnaire from "./pages/Questionnaire";
import EditDocumentPage from "./pages/EditDocumentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route
          path="/questionnaire"
          element={<Questionnaire />}
        />
        <Route
          path="/edit"
          element={<EditDocumentPage />}
        />
      </Routes>
    </>
  );
}

export default App;
