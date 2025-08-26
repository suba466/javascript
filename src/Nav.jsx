import './Tem.css'
import box from "./assets/box.png";
import food1 from "./assets/food1.jpg";
import food2 from "./assets/food2.jpg";
import food3 from "./assets/food3.jpg";
import food4 from "./assets/food4.jpg";
import food5 from "./assets/food5.jpg";
import food6 from "./assets/food6.jpg";
import food7 from "./assets/food7.jpg";
import food8 from "./assets/food8.jpg";
import img1 from "./assets/img-01.jpg";
function Nav() {
    return(
      <div className=''>
        <div className='img' style={{color:"white"}}>
          <div className="div">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                  <div className="row">
                    <div className="col-auto"  >
                      <img src={box} alt="logo" />
                    </div>
                    <div className="col">
                      <div className="col">
                        <h5>Simple House</h5></div>
                      <div className="col">
                        <p>new restaurant template</p></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col"  >
                      <a href="" className='a'>Home</a>
                    </div>
                      <div className="col">
                         <a href="" className='a'>About</a></div>
                      <div className="col">
                        <a href="" className='a'>Contact</a></div></div></div></nav></div></div>
      <div className="container-fluid">
        <h3 style={{textAlign:"center", marginTop:"50px"}}>Welcome to Simple House</h3>
        <div className="welcome">
        <p style={{color:"grey", textAlign:"center"}}>Total 3 Html pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p></div></div>
      <div className="welcome">
        <button>Pizza</button>
        <button>Salad</button>
        <button>Noodles</button>
      </div>
<div className="container">
  <div className="row" style={{width:"100%"}}>
    {[
      { img: food1, title: "Fusce dictum finibus", price: "$45 / $55" },
      { img: food2, title: "Aliquam sagittis", price: "$65 / $70" },
      { img: food3, title: "Sed varius turpis", price: "$30.50" },
      { img: food4, title: "Aliquam sagittis", price: "$25.50" },
      { img: food5, title: "Maecenas eget justo", price: "$80.25"},
      { img: food6, title: "Quisque et felis eros", price: "$20 / $40 / $60"},
      { img: food7, title: "Sed ultricies dui", price: "$94" },
      { img: food8, title: "Donec porta consequat", price: "$15" },
    ].map((food, i) => (
      <div className="col " key={i}>
        <div className="card border-0 shadow-sm" style={{width:"13rem"}}>
          <img src={food.img} className="card-img-top" alt={food.title} />
          <div className="card-body">
            <h5 className="card-title">{food.title}</h5>
            <p className="card-text text-muted">
              Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan
            </p>
            <p className="text-success fs-5">{food.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="container" style={{margin:"40px auto"}}>
<div className="box">
  <img src={img1} alt="acado" />
  <div className="box1" style={{textAlign:"center"}}>
    <h5 style={{color:"#1a6692"}}>Maecenas nulla neque</h5>
    <p style={{color:'Gray'}}>
      Redistributing this template as a downloadable ZIP file on any template collection site 
      is strictly prohibited. You will need to <a href="">talk to us</a> for additional 
      permissions about our templates. Thank you.
    </p>
    <button>Read more</button>
  </div>
</div>
 </div>
      </div>
      
    
        
    )
}export default Nav;