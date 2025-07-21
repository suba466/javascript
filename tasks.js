function checkIf(){
    let n=Number(document.getElementById("num").value);
    let result="";
    if(n>0){
       document.getElementById("result").innerText=n +" is positive number.";
    }
}
function checkIfelse(){
    let num=Number(document.getElementById("num1").value);
    let result1="";
    if(num%2==0){
        document.getElementById("result1").innerText=num+" is a even number."
    }else{
        document.getElementById("result1").innerText=num+" is a odd number."
    }
}
function checkLadd(){
    let a=Number(document.getElementById("num2").value);
    let result2="";
    if(a>90 && a<=100){
        document.getElementById("result2").innerText="Grade A"
    }else if(a>75 && a<=90){
        document.getElementById("result2").innerText="Grade B"
    }else if(a>50 && a<=75){
        document.getElementById("result2").innerText="Grade C"
    }else{
        document.getElementById("result2").innerText="Fail"
    }
}
function Calculate(){
    let b=Number(document.getElementById("switch1").value);
    let c=Number(document.getElementById("switch2").value);
    let operator=document.getElementById("operator").value;
    let result3="";
    switch (operator){
        case "+":
            result3=b+c;
            break;
        case "-":
            result3=b-c;
            break;
        case "*":
            result3=b*c;
            break;
        case "/":
            if(num2==0){
                result3="cannot divide by zero";
            }else{result3=b/c;}
            break;
        case "%":
            result3=b%c;
            break;
        default:
            result3="Invalid operator"
    }
    document.getElementById("calcResult").innerText = "Result: " + result3;
}
function multiply(){
    let d=Number(document.getElementById("forLoop").value);
    let res=" ";
    for(let i=1;i<=10;i++){
        res += "<li>" + d + " * " + i + " = " + (d * i) + "</li>";
    }
    document.getElementById("calcResult1").innerHTML=res;
}
function count(){
    let e=Number(document.getElementById("whileLoop").value);
    let ans=0;
    let num=Math.abs(e);
    while(num>0){
        ans+=num%10;
        num=Math.floor(num/10);
    }
    document.getElementById("count1").innerText="Sum of the digits "+ans;
}
