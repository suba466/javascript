function Home({name, setName}){
    return (
        <div className="">
            <input type="text" placeholder="Enter your name.." value={name} onChange={(e)=> setName(e.target.value)} style={{padding:"5px", marginRight:"10px"}} />
            
        </div>
    );
}
export default Home;
