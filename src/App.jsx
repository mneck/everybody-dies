import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import Questionnaire from "./pages/Questionnaire";

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
          path="/create/poa"
          element={<Questionnaire />}
        />
        {/*}
        <Route
          path="/create/will"
          element={<CreateWillPage />}
        />
  */}
      </Routes>
    </>
  );
}

export default App;
