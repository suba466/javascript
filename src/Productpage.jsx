import { useParams } from "react-router-dom";
const productData={
    101:{name:"Bluetooth Speaker",price:999, desc:"Clear sound, compact size."},
    102:{name:"Wireless Mouse",price:499, desc:"Smooth tracking. ergonomic design."},
    103:{name:"Smart Watch",price:2999, desc:"Fitness tracking and notifications."},
    104:{name:"Gaming Keyboard",price:1999, desc:"RGB backlight, mechanical keys."},
    105:{name:"USB-C Hub",price:799, desc:"Multiple ports for laptops."},
    106:{name:"Noise Cancelling Headphones",price:3499, desc:"Immersive sound experience."},
    107:{name:"Portable SSD",price:2499, desc:"Fast storage on the go."},
    108:{name:"Webcam HD",price:899, desc:"Clear video calls."},
    109:{name:"Laptop Stand",price:499, desc:"Ergonomic and foldable."},
    110:{name:"Mini Projector",price:4999, desc:"Home theatre experience."}}
const Productpage=()=>{
    const{id}=useParams();
    const product=productData[id];
    if(!product) return<p>("product not found...")</p>;
    return(
        <div>
            <h2>{product.name}</h2>
            <p>Price:₹{product.price}</p>
            <p>{product.desc}</p>
        </div>
    )
};
export default Productpage;