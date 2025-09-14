import { useLocation } from "react-router-dom";

const Articlelist = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name") || "Guest";
  const age=queryParams.get("age") || "unknown";
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Profile Page</h2>
     <p> Hello <strong>{name}</strong>! you are <strong>{age}</strong> years young!!</p>
    </div>
  );
};

export default Articlelist;
