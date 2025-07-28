function checkPrime(){
    let num=Number(document.getElementById("numInput").value);
    let result = "";
    if(num<=1){
        result=num +" is not a prime number.";
    }else{
        let isPrime=true;
        for(let i=2;i<num;i++){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
    if(isPrime){
        result=num +" is a prime number.";
    }else{
        result=num +" is not a prime number.";
    }
}
    document.getElementById("result").innerText=result;
}

function generateFibonacci(){
    let n=Number(document.getElementById("number").value);
    let result1="";
    if(n<=0){
        result1="Please enter a number greater than 0."
    }else{
        let a=0;b=1;
        for(let i=0;i<n;i++){
            result1 +=a+" ";
            let next=a+b;
            a=b;
            b=next;
        }
        result1="Fibonacci Series: " + result1
    }
    document.getElementById("result1").innerText=result1;
}