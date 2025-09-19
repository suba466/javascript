import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Button } from "react-bootstrap";
function ProductList() {
  const dispatch = useDispatch();
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Laptop", price: 65000 },
    { id: 3, name: "Blutooth", price: 5000 },
    { id: 4, name: "Speaker", price: 12500 },
    { id: 5, name: "Keyboard+Mouse", price: 5500 }
  ];
  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name}-₹{p.price}</span>
          <Button variant="outline-secondary" disabled={!isLoggedIn} onClick={() => dispatch(addItem(p))}>Add to cart</Button><br /> <br />
        </div>
      ))}
      {!isLoggedIn && <p className="text-danger mt-2">Login to add products to cart</p>}
    </div>
  )
} export default ProductList;