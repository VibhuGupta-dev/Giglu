import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup({ onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()
  async function signup(event) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/user/api/signup",
        { name, email, password, confirmPassword },
        { withCredentials: true },
      );
      setSuccess(response.data?.message ?? "Your account is ready.");
      if(response.status == 201) {
        navigate("/Dashboard")
      }
    } catch (err) {
      const responseMessage = axios.isAxiosError(err)
        ? err.response?.data?.message
        : undefined;
      setError(
        typeof responseMessage === "string"
          ? responseMessage
          : "Unable to sign up. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <p className="auth-subtitle">Join your community. Find help or find your next gig.</p>
      <form className="auth-form" onSubmit={signup}>
        <label htmlFor="signup-name">Your name</label>
        <input
          id="signup-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="How should we call you?"
          autoComplete="name"
          required
        />
        <label htmlFor="signup-email">Email address</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <div className="auth-password-row">
          <div>
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 8 characters"
              minLength={8}
              autoComplete="new-password"
              required
            />
          </div>
          <div>
            <label htmlFor="signup-confirm-password">Confirm password</label>
            <input
              id="signup-confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Type it again"
              autoComplete="new-password"
              required
            />
          </div>
        </div>
        <button className="button button-dark auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create my account"} <span aria-hidden="true">↗</span>
        </button>
      </form>
      {error && <p className="auth-message auth-error" role="alert">{error}</p>}
      {success && <p className="auth-message auth-success" role="status">{success}</p>}
      <p className="auth-switch">Already part of the neighborhood? <button onClick={onSwitch}>Sign in</button></p>
    </>
  );
}

export default Signup;
