import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BookAppointment() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${name} on ${date}`);
    navigate("/confirm");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h2>Book Appointment</h2>
      <input type="text"placeholder="Patient name..."value={name}onChange={(e) => setName(e.target.value)} required/>
      <br /><br />
      <input type="date"value={date}onChange={(e) => setDate(e.target.value)}required/>
      <br /><br />
      <button type="submit" className="btn btn-primary">Confirm Booking
      </button>
    </form>
  );
}

export default BookAppointment;
