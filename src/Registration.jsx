import { useState } from "react";
import { Form } from "react-bootstrap";
function Registration(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const handleRegister=async()=>{
        try{
            const res=await fetch("http://localhost:1433/register",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password}),
            });
            const data=await res.json();
            setMessage(data.message||data.error);
        }catch{
            setMessage("Something went wrong. Please try again.");
        }
    };
    return(
        <Form>
            <h4 className="mb-3">Create Account</h4>
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
      </div>
      <button type="button" className="btn btn-primary w-100" onClick={handleRegister}>
        Register
      </button>
      {message && <p className="mt-3 text-center">{message}</p>}
        </Form>
    )
}export default Registration