import { Routes,Route,Link } from "react-router-dom";
import Productpage from './Productpage.jsx';
const Products=[{id:101, name:"Bluetooth Speaker"},{id:102, name:"Wireless Mouse"},
                {id:103, name:"Smart Watch"},{id:104, name:"Gamimg Keyboard"},
                {id:105, name:"USB-C Hub"},{id:106, name:"Noice Cancelling Headphones"},
                {id:107, name:"Portable SSD"},{id:108, name:"Webcam HD"},
                {id:109, name:"Laptop Stand"},{id:110, name:"Mini Projector"},]
const Useparam=()=>{
    return(<>
        <div>
            <h1 style={{textAlign:"center"}}>Simple Shop</h1>
            <ul>
                {Products.map(item=>(
                    <li key={item.id}>
                        <Link to={`/Products/${item.id}`} style={{textDecoration:"none"}}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <Routes>
            <Route path="/products/:id" element={<Productpage/>}></Route>
        </Routes>
        </>
    )
};
export default Useparam;