import "./App.css";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import Questionnaire from "./pages/Questionnaire";
import Review from "./pages/Review";
import DocumentListPage from "./pages/DocumentListPage";
import NoPage from "./pages/NoPage";

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
          path="/documents"
          element={<DocumentListPage />}
        />
        <Route path="/review/:id" element={<Review />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
