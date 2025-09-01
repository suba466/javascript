import { useReducer } from "react";


const Myreducer=()=>{
    const counter=(state,action)=>{
        switch(action.type){
            case "in":
                return state+1
                 case "de":
                return state-1
                 case "mul":
                return state*action.payload
                 default:
                return state
        }

    }
    const [count, dispatch]=useReducer(counter,0)
    return (
        <div>
            <h1>use reducer sample</h1>
            <h3>display value {count}</h3>
            <button onClick={()=>dispatch({type:"in"})}>+++</button>
             <button onClick={()=>dispatch({type:"de"})}>+--+</button>
              <button onClick={()=>dispatch({type:"mul",payload:2})}>+*+</button>

        </div>
    )
}
export default Myreducer;