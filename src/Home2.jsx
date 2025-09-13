import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to the Clinic Portal</h2>
      <p>
        <Link to="/book">Click here to book an appointment</Link>
      </p>
    </div>
  );
};

export default Home2;
