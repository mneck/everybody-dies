import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";

import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <div className="app-vh-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
