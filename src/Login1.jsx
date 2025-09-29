import { useState } from "react";
import { Button } from "react-bootstrap";

function Login1({ onForgot }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:1433/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
    } catch {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form>
      <h4 className="mb-3">Login</h4>

      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {/* Forgot Password link */}
        <div className="text-end mt-1">
          <span
            className="text-primary"
            style={{ fontSize: "0.9rem", cursor: "pointer" }}
            onClick={onForgot}
          >
            Forgot Password?
          </span>
        </div>
      </div>

      <Button type="button" className="btn btn-success w-100" onClick={handleLogin}>
        Login
      </Button>

      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
}

export default Login1;
