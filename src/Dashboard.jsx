import {Link, Outlet} from "react-router-dom";

function Dashboard(){
    return(
        <div style={{textAlign:"center"}}>
            <h2>Dashboard</h2>
            <h3>We have 2 different child components</h3>
            <nav style={{marginBottom:"15px"}}>
                <Link to="profile" style={{marginRight:"10px",textDecoration:"none"}}>Profile</Link>
                <Link to="settings" style={{marginRight:"10px",textDecoration:"none"}}>Settings</Link>
            </nav><Outlet/>
        </div>
    )
}export default Dashboard;