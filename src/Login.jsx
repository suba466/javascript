import { useAuth } from "./CreateAuth.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Suba");
    navigate("/dash"); 
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login as Suba</button>
    </div>
  );
}

export default Login;
