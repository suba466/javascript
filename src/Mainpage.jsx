import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>HomePage (Public)</h2>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default Mainpage;
