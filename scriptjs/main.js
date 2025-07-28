import {greet} from './helper.js';
document.getElementById("showGreeting").addEventListener("click",()=>{
    document.getElementById("output6").innerText=greet("Ammu");
});