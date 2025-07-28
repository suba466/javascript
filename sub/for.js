const cars=["BMW","VOLVO","SAAB","FORD","FIAT","AUDI"];
let text=" ";
for(let i=3; i<cars.length;i++){
    text +=cars[i]+"<br>";
}
document.getElementById("demo").innerHTML = text;
const numbers = [45, 4, 9, 16, 25];
let x=" ";
numbers.forEach(myFunction);
document.getElementById("demo1").innerHTML=x;
function myFunction(value, index, array){
    x+= array+ "<br>"
}
let language="JavaScript";
let txt=" ";
for(let a of language){
    txt += a + "<br>";
}
document.getElementById("demo2").innerHTML=txt;
let t=" ";
let i=0;
while (i<10){
    t +="<br> The number is "+ i;
    i++;
}
document.getElementById("dem").innerHTML=t;
let word=" ";
let a=0;
do{
    word +="<br> The number is "+ a;
    a++;
}
while(a<10);
document.getElementById("dem1").innerHTML=word
