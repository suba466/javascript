import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./CartSlice";
import { Button } from "react-bootstrap";
function Cart1() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
    if (!isLoggedIn) return <p>Please login to see your cart</p>;
    return (
        <div>
            <h2>Shopping Cart</h2>
            {items.length == 0 ? <p>Cart is empty</p> : (
                items.map(item => (
                    <div key={item.id}>
                        {item.name}- ₹{item.price}
                        <Button variant="outline-secondary" onClick={() => dispatch(removeItem(item.id))}>Remove</Button> <br /> <br /></div>
                ))
            )}
        </div>
    )
} export default Cart1