import { Routes, Route } from "react-router-dom";
import BookAppointment from './BookAppointment.jsx';
import Confirm from './Confirm.jsx';
import Home2 from './Home2.jsx';

const Regis = () => {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/book" element={<BookAppointment />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  );
};

export default Regis;
