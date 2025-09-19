import ProductList from "./ProductList.jsx";
import Cart1 from "./Cart1.jsx";
import AuthButton from "./AuthButton.jsx";
import { Link, Route, Routes } from "react-router-dom";
function Reduxdemo() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>My Shop</h2>
      <AuthButton />
      
      <nav className="mb-4">
        <Link to='/' className="btn btn-primary me-2">Products</Link>
        <Link to="/cart" className="btn btn-success">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="/cart" element={<Cart1/>}></Route>
      </Routes>
    </div>
  );
}

export default Reduxdemo;
