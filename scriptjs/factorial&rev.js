function generateFactorial(){
      let n=Number(document.getElementById("inputNum").value);
      let outputDiv=document.getElementById("output");
      outputDiv.innerHTML=" ";
      if (n<0){
            let msg=document.createElement("p");
            msg.innerText="Factorial is not defined for negative numbers.";
            outputDiv.appendChild(msg);
            return;
      }
      let fact=1;
      let i=n;
      while(i>1){
            fact *=i;
            i--;
      }
      let resultSpan=document.createElement("span");
      resultSpan.innerText="Factorial of " +n+ " is "+ fact;
      outputDiv.appendChild(resultSpan)
}

function generateRev(){
      let n=Number(document.getElementById("input").value);
      let outputDiv=document.getElementById("result");
      outputDiv.innerHTML=" ";
      let rev=0;
      while(n>0){
            let digit=n%10;
            rev=rev*10+digit;
            n=Math.floor(n/10);
      }
      let ans = document.createElement("p");
      ans.innerText = "Reverse order is "+ rev;
      outputDiv.appendChild(ans);
}