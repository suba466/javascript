import { useState } from "react";
import Registration from "./Registration.jsx";
import Login1 from "./Login1.jsx";
import Forgotpass from "./Forgotpass.jsx";
import { Button } from "react-bootstrap";

function Fsdemo() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", margin: "auto" }}>
        <h2 className="text-center mb-4">User Portal</h2>

        <div className="d-flex justify-content-around mb-4">
          <Button
            variant={activeTab === "register" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("register")}
          >
            Register
          </Button>
          <Button
            variant={activeTab === "login" ? "success" : "outline-success"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </Button>
          
        </div>

        {activeTab === "register" && <Registration />}
        {activeTab === "login" && <Login1 onForgot={() => setActiveTab("forgot")} />}
        {activeTab === "forgot" && <Forgotpass />}

      </div>
    </div>
  );
}

export default Fsdemo;
