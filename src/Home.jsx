function Home({name, setName}){
    return (
        <div className="">
            <h2>Greeting app</h2>
            <input type="text" placeholder="Enter your name.." value={name} onChange={(e)=> setName(e.target.value)} style={{padding:"5px", marginRight:"10px"}} />
            
        </div>
    );
}
export default Home;
