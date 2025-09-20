import { useState } from "react";
import { Button } from "react-bootstrap";
const Quotefetcher=()=>{
    const[quote, setQuote]=useState(null);
    const [loading, setLoading]=useState(false);
    const getQuote=async()=>{
        setLoading(true);
        try{
            const response=await fetch('https://api.quotable.io/random');
            const data=await response.json();
            setQuote(data);
        }
        catch(error){
            setQuote({content: "Oops! Couldn't fetch quote.", author: "Try again later." });
        }finally{
            setLoading(false);
        }
    };
    return(
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h1>Random Quote API Demo</h1>
            <Button onClick={getQuote} style={{padding:"10px 20px", fontSize:"16px"}}>{loading?"Loading...":"Get a Quote"}</Button>
            {quote &&(
                <div style={{ marginTop: '30px', maxWidth: '600px', margin: 'auto' }}>
                    <p style={{ fontSize: '20px', fontStyle: 'italic' }}>"{quote.content}"</p>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— {quote.author}</p>
                </div>
            )}
        </div>
    )
}
export default Quotefetcher;