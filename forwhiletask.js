function checkPrime(){
     let number = Number(document.getElementById("numberInput").value);
    let isPrime=true;
    for(let i=2;i<number;i++){
        if(number<2){
            isPrime=false;
            break;
        }
        if(i<number && number%i==0){
            isPrime=false;
            break;
        }
    }
  if(isPrime){
     document.getElementById("result").innerText = number + " is a Prime Number.";
   }else{
    document.getElementById("result").innerText=number + " is NOT a Prime Number."
   }
}
function generateFibonacci(){
      let n=Number(document.getElementById("inputNum").value);
      let outputDiv=document.createElement("output");
      outputDiv.innerHTML = " ";
      let a=0,b=1;
      for(let i=0;i<n;i++){
            let span=document.createElement("span");
            span.innerText=a+" ";
            outputDiv.appendChild(span);
            let next=a+b;
            a=b;
            b=next;
      }
      document.body.appendChild(outputDiv);
}

