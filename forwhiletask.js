function checkPrime(){
    let num= +document.getElementById("numberInput").value;
    let isPrime=true;
    for (let i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(num<=1){
        isPrime=false;
    }
    if(isPrime){
        document.getElementById("result").innerHTML=num + "is a Prime Number"
    }else{
        document.getElementById("result").innerHTML=num + "is not a Prime Number"
    }
}
