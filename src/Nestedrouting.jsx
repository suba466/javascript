import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Home1 from "./Home1.jsx";
import Profile1 from './Profile1.jsx'
import Settings from "./Settings.jsx";
import  Form  from "./Form.jsx";
function Nestedrouting() {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile1 />} />
        <Route path="settings" element={<Settings />}>
          <Route path="form" element={<Form/>}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default Nestedrouting;
