import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>HomePage (Public)</h2>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/prod")}>Go to Products</button>
      <button onClick={() => navigate("/cart")}>Go to Cart</button>
    </div>
  );
};

export default Mainpage;
