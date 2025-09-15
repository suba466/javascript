import { useAuth } from './CreateAuth.jsx';
import { useNavigate } from "react-router-dom";

const Dash = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome {user?.name}</h2>
      <p>This is your protected dashboard</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dash;
