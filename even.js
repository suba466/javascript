function generateEven(){
      let n =Number(document.getElementById("inputNum").value);
      let outputDiv=document.getElementById("output");
      outputDiv.innerHTML=" ";
      for(let i=0;i<=n;i++){
            let evenNumber=i*2;
            let span=document.createElement("span");
            span.innerText=evenNumber + " ";
            outputDiv.appendChild(span);
      }}
            