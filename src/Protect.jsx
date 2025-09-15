import { Routes, Route } from "react-router-dom";
import { CreateAuth } from './CreateAuth.jsx';
import ProtectedRoute from "./ProtectedRoute";
import Mainpage from "./Mainpage";
import Dash from "./Dash";
import Login from "./Login";

function Protect() {
  return (
    <CreateAuth>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dash"
          element={
            <ProtectedRoute>
              <Dash />
            </ProtectedRoute>
          }
        />
      </Routes>
    </CreateAuth>
  );
}

export default Protect;
