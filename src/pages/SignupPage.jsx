import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// switch with env variable later
const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] =
    useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password };
    // Make an axios request to the API
    // If the POST request is successful, redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/profile");
      })
      .catch((error) => {
        const errorDescription =
          error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <div className="signup-login-form">
          <label>Email:</label>
          <input
            className="signup-login-form-item"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <label>Password:</label>
          <input
            className="signup-login-form-item"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <button type="submit">
            <h2>Click here to sign up</h2>
          </button>
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default SignupPage;
