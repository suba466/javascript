 function increase(){
    const input=Number(document.getElementById("input1").value);
    if(Number.isInteger(input)){
        const newVal=input+1;
        document.getElementById("currentValue").textContent=newVal.toString();
    }else{
        document.getElementById("output1").innerText="Please enter a valid whole number."
    }
}
function swap(){
    let A=Number(document.getElementById("input2").value);
    let B=Number(document.getElementById("input3").value);
    A=A+B;
    B=A-B;
    A=A-B;
    document.getElementById("currentValue1").textContent=A.toString();
    document.getElementById("currentValue2").textContent=B.toString();
}
function trim(){
    const A=document.getElementById("input4").value;
    const B=A.trim();
    document.getElementById("output3").innerText=B;
}
function unDefined(){
    var a=100;
    let b="Hello";
    const c=true;
    const name=document.getElementById("varName").value;
    let result="";
    try{
        const value=eval(name);
        result='"'+name+'" is defined and its value: '+value;
    }catch(err){
        result='"'+name+'"is not defined.';
    }
    document.getElementById("output4").innerHTML=result;
}
function date1(){
    let today=new Date();
    today.setDate(today.getDate() + 15);
    document.getElementById("output5").innerText="Date after 15 days from today: " +today.toDateString();
}
function date2(){
    const A=new Date(document.getElementById("date1").value);
    const B =new Date(document.getElementById("date2").value);
    if(A.getTime()==B.getTime()){
        document.getElementById("output6").innerText="Both the dates are same.";
    }else{
        const diffInMs=Math.abs(B-A);
        const diffInDays=(diffInMs/(1000*60*60*24));
        document.getElementById("output6").innerText="There are " +diffInDays+ "day(s) between the two dates.";
    }
}
function random(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let min=Math.min(num1,num2);
    let max=Math.max(num1,num2);
    let randomNum=Math.floor(Math.random()*(max-min+1))+min;
    document.getElementById("output7").innerText=randomNum;
}
function random1(){
    let num=Math.floor(Math.random()*9000)+1000;
    document.getElementById("output8").innerText="Random 4-digit number: " +num;
}
function check(){
    let num=Number(document.getElementById("checkInt").value);
    if(Number.isInteger(num)){
        document.getElementById("output9").innerText="The entered number is an INTEGER.";
    }else{
        document.getElementById("output9").innerText="The entered number is a FLOAT.";
    }
}
