import { Routes, Route } from "react-router-dom";
import Products from './Products.jsx';
import Productdetail from './Productdetail.jsx';
import Checkout from './Checkout.jsx';
function Uses() {
  return (
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/product/:id' element={<Productdetail />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}
export default Uses;
