function Count({count, step, setStep, increase, decrease}){
    return(
        <div>
            <p>Current Count:{count}</p>
            
                Step Value:
                <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} style={{marginLeft:"10px"}}/>
            
            <div style={{marginTop:"10px"}}>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    );
}export default Count;