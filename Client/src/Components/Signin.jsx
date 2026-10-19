import axios from "axios";
import { useState } from "react";

export function Signin({ onCreateAccount }) {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState("")
    const [message , setMessage] = useState("")

    async function signin (event) {
        event.preventDefault()
        setError("")
        setMessage("")

        try {
            const res = await axios.post(
                "http://localhost:3000/user/spi/signin",
                { email, password },
                { withCredentials: true },
            )
            setMessage(res.data.message)
        }catch(err) {
            const responseMessage = axios.isAxiosError(err)
                ? err.response?.data?.message
                : undefined

            setError(
                typeof responseMessage === "string"
                    ? responseMessage
                    : "Unable to sign in. Please try again.",
            )
        }
    }
  return (
    <>
      <p className="auth-subtitle">Pick up right where your neighborhood needs you.</p>
      <form onSubmit={signin} className="auth-form"> 
        <label htmlFor="signin-email">Email address</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          id="signin-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <label htmlFor="signin-password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id="signin-password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
        />
        <h4>{message}</h4>
        <h4>{error}</h4>
        <button className="button auth-submit" type="submit">
          Sign in <span aria-hidden="true">↗</span>
        </button>
      </form>
      <p className="auth-switch">
        New to the neighborhood? <button onClick={onCreateAccount} type="button">Create an account</button>
      </p>
    </>
  );
}

export default Signin;
