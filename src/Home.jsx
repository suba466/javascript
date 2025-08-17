function Home({ name, setName }) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default Home
