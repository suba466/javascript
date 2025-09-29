import { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";

function Forgotpass() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      const res = await fetch("http://localhost:1433/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, newPassword }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
    } catch {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form>
      <h4 className="mb-3">Reset Password</h4>
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
        <label className="form-label">New Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter new password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
      </div>
      <Button type="button" className="btn btn-warning w-100" onClick={handleForgotPassword}>
        Reset Password
      </Button>
      {message && <p className="mt-3 text-center">{message}</p>}
    </form>
  );
}

export default Forgotpass;
