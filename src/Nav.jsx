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
      <div className="container" >
        <div className="card" style={{width: "13rem", float:"left", border:"none"}}>
          <img src={food1} class="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">Fusce dictum finibus</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$45 / $55</p></div></div>
         <div className="card" style={{width: "13rem", float:"left",marginLeft:"20px", border:"none"}}>
          <img src={food2} class="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">Aliquam sagittis</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$65 / $70</p></div></div>
           <div className="card" style={{width: "13rem", float:"left",marginLeft:"20px", border:"none"}}>
          <img src={food3}class="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">Sed varius turpis</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$30.50</p></div></div>
         <div className="card" style={{width: "13rem", float:"left",marginLeft:"20px", border:"none"}}>
          <img src={food4} class="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">Aliquam sagittis</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$25.50</p></div></div>
           <div className="card" style={{width: "13rem", float:"left", border:"none"}}>
          <img src={food5} class="card-img-top" alt="..."/>
         <div className="card-body" >
          <h5 className="card-title">Maecenas eget justo</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$80.25</p></div></div>
         <div className="card" style={{width: "13rem", float:"left",marginLeft:"20px", border:"none"}}>
          <img src={food6} class="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">Quisque et felis eros</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$20 / $40 / $60</p></div></div>
           <div className="card" style={{width: "13rem", float:"left",marginLeft:"20px", border:"none"}}>
          <img src={food7} class="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">Sed ultricies dui</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$94</p></div></div>
         <div className="card" style={{width: "13rem", float:"left",marginLeft:"20px", border:"none"}}>
          <img src={food8} class="card-img-top" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">Donec porta consequat</h5>
          <p className="card-text">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
          <p style={{color:"#2F956D",fontSize: "1.25rem"}}>$15</p></div></div>
</div> 
<div className="container-fluid" style={{marginTop:"50px"}}>
      <div class="container">
        <div class="row" style={{float:"left"}}>
          <div class="col">
            <img src={img1} />
          </div>
          <div class="col " style={{border:"2px solid black"}} >
             
          </div>
          
        </div>
</div>
  </div>  
      </div>
      
    
        
    )
}export default Nav;