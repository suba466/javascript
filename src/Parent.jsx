import Child1 from "./Child1.jsx";
function Parent(){
    return(
        <div style={{margin:"20px",padding:"20px",border:"1px solid black" }}>
            <h2>Parent Component</h2>
            <Child1/>
        </div>
    )
}export default Parent;