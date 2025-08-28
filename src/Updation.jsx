import { useContext } from "react";
import { User } from "./User.jsx";

function Child() {
  const { userName, setUsername } = useContext(User);

  return (
    <div style={{ padding: "15px", border: "1px dashed gray" }}>
      <h3>Child Component</h3>
      <p>Current User: {userName}</p>
      <input
        type="text"
        placeholder="Enter new name"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "5px", marginTop: "5px" }}
      />
    </div>
  );
}

export default Child;
