import { Route, Routes, Link} from "react-router-dom";
import Articlelist from './Articlelist.jsx';

const Articles=()=>{
  return(
    <div style={{textAlign:"center", marginTop:"2rem"}}>
      <h1>Welcome to Demo App</h1>
      <nav style={{marginBottom:"1 rem"}}>
        <Link to="/articlelist?name=Suba&age=22" style={{marginRight:"1 rem"}}>
        View Suba's Profile</Link>
        <Link to="//articlelist?name=Buddy&age=1000">View Buddy's Profile</Link>
      </nav>
      <Routes>
        <Route path="/articlelist" element={<Articlelist/>}></Route>
      </Routes>
    </div>
  )
};
export default Articles;
