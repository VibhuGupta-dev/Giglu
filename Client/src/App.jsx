import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function signup(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post(
        "http://localhost:3000/user/api/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        },
        { withCredentials: true },
      );
      setSuccess("User created successfully.");
    } catch (err) {
      const responseMessage = axios.isAxiosError(err)
        ? err.response?.data?.message
        : undefined;
      setError(
        typeof responseMessage === "string"
          ? responseMessage
          : "Unable to sign up. Please try again.",
      );
    }
  }

  return (
    <>
      <div className="">
        <form onSubmit={signup}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
            minLength={8}
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="confirm password"
            required
          />
          <button type="submit">submit</button>
        </form>
        {error && <h4 role="alert">{error}</h4>}
        {success && <h4 role="status">{success}</h4>}
      </div>
    </>
  );
}

export default App;
