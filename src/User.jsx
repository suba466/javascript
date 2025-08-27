import { useState } from "react";
import Update from "./Update.jsx";
import { profile } from "./profilecontext.jsx"; 

function User() {
  const [userName, setUsername] = useState("Guest");

  return (
    <profile.Provider value={{ userName, setUsername }}>
      <Update />
    </profile.Provider>
  );
}

export default User;
