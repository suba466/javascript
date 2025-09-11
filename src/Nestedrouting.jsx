import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard.jsx';
import Home from './Home.jsx';
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
function Nestedrouting(){
    return(
        <>
            <nav style={{padding:"10px", background:"#eee"}}>
                <h2 style={{textAlign:"center"}}>Nested Routing...</h2>
                <Link to="/" style={{marginRight:"10px",textDecoration:"none", color:"black"}}>Home</Link>
                <Link to="/dashboard" style={{marginRight:"10px",textDecoration:"none", color:"black"}}>Dashboard</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/dashboard/*" element={<Dashboard/>}>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="settings" element={<Settings/>}/>
                </Route>
            </Routes>
        </>
    )
}export default Nestedrouting