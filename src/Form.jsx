import { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();

    if (trimmedName === '') {
      setError("Name is required");
    } else if (trimmedName.length < 3) {
      setError("Name must be at least 3 characters");
    } else {
      setError('');
      console.log("Submitted Name:", trimmedName)
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" style={{ padding: '10px', marginTop: '10px' }}>Submit</button>
    </form>
  );
}

export default Form;
