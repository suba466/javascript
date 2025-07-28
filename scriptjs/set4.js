function combine(){
    const arr1=document.getElementById("input1").value;
    const arr2=document.getElementById("input2").value;
    const arr3=arr1.concat(arr2);
    document.getElementById("output1").innerText=arr3;
}
function unique(){
    const input=document.getElementById("input3").value;
    const output=document.getElementById("output2");
    const arr=input.split(",");
    const trimmed=arr.map(item=>item.trim());
    const uniqueValues=[...new Set(trimmed)];
    output.innerText = "Unique: " + uniqueValues.join(", ");
}
function sorting(){
    const input=document.getElementById("input4").value;
    const output=document.getElementById("output3");
    if(!input.trim()){
        output.innerText="Please enter some values. ";
        return;
    }
    const arr=input.split(",").map(item=>item.trim());
    const numeric=arr.every(val=>!isNaN(val));
    const sorted=numeric
        ? arr.map(Number).sort((a,b)=>a-b)
        :arr.sort();
    const len=sorted.length;
    let centerValue;
    if(len%2==1){
        centerValue="Center value: "+sorted[Math.floor(len/2)];
    }else{
        centerValue = "Center values: " + sorted[len / 2 - 1] + ", " + sorted[len / 2];
    }
    output.innerText="Sorted: " +sorted.join(",")+"\n"+centerValue;
}
function rupees(){
    let input=Number(document.getElementById("input5").value);
    const output=document.getElementById("output4");
    const denominations=[2000,500,200,100,50,20,10,5,2,1];
    if(isNaN(input) || input<=0){
        output.innerText="Please enter a valid amount.";
        return;
    }
    let result="<h4>Breakdown:</h4><ul>";
    for(let i=0;i<denominations.length;i++){
        let note=denominations[i];
        let count=Math.floor(input/note);
        if(count>0){
            result +="<li>" +note+"*"+count+"="+(note*count)+"</li>";
            input%=note;
        }
    }result+="</ul>";
    output.innerHTML=result;
}
function updateCities(){
    const country=document.getElementById("country").value;
    const city=document.getElementById("city");
    city.innerHTML="<option value=''>--Select city--</option>";
    const countryCityMap={
        India:["Chennai","Tiruppur","Coimbatore"],
        USA:["New York","Los Angeles","Chicago"],
        Canada:["Toronta","Vancouver","Ottawa"]
    };
    if(countryCityMap[country]){
        const cities=countryCityMap[country];
        cities.forEach(function(place){
            const opt=document.createElement("option");
            opt.value=place;
            opt.text=place;
            city.appendChild(opt);
        });
    }
}
function processArray(){
    const arr1=document.getElementById("input6").value;
    const arr2=document.getElementById("input7").value;
    const output=document.getElementById("output5");
    if(!arr1.trim()|| !arr2.trim()){
        output.innerText="Please enter both the arrays.";
        return;
    }
    const input1=arr1.split(",").map(item=>item.trim());
    const input2=arr2.split(",").map(item=>item.trim());
    const combined=input1.concat(input2);
    const unique=[...new Set(combined)];
    const numeric=unique.map(Number).sort((a,b)=>a-b);
    let centerValue;
    const len=numeric.length;
    if(len%2==1){
        centerValue="Center value: "+numeric[Math.floor(len/2)];
    }else{
        centerValue="Center value: "+numeric[len/2-1]+", "+numeric[len/2];
    }
    const add=numeric.map(val=>Number(val)+2);
    output.innerText="Combine the arrays: "+combined.join(",")+ "\n" +
                     "Unique values : "+unique.join(",")+"\n"+
                      "Sorting arrays:"+numeric.join(",")+"\n"+
                      centerValue+"\n"+"Add +2 for each: "+add.join(","); 
}
function toggleSection(show){
    const section=document.getElementById("experienceSection")
    section.style.display=show?"block":"none";
}
function validateSelection(){
    const checkBox=document.querySelectorAll("input[name='hobbies']:checked");
    const output=document.getElementById("output6");
    const count=checkBox.length;
    if(count<2){
        output.innerText="Please select at least 2 options.";
    }else if(count>5){
        output.innerText="You can select maximum 5 options.";
    }else{
        output.innerText="Valid selection: "+count+" options selected."
    }
}
function checkLeap(){
    const input=Number(document.getElementById("yearInput").value);
    const output=document.getElementById("output7");
    if(!(input)){
        output.innerText="Please enter a valid year.";
        return;
    }
    if((input%4==0 && input%100 !==0 )||(input%400==0)){
        output.innerText=input+" is a leap year.";
    }else{
        output.innerText=input+" is not a leap year.";
    }
}
function formateDate(){
    const input=(document.getElementById("dateInput").value);
    const output=document.getElementById("output8");
    const date=new Date(input);
    const day=String(date.getDate()).padStart(2,'0');
    const month=String(date.getMonth()+1).padStart(2,'0');
    const year=String(date.getFullYear());
    output.innerText="Formatted Date: "+ day+"/"+month+"/"+year;
}
const stack=[];
function push(){
    const input=document.getElementById("stackInput").value;
    if(input!==""){
        stack.push(input);
        document.getElementById("stackInput").value="";
        document.getElementById("output9").innerText="";
        showStack();
    }
}
function peek(){
    const output = document.getElementById("output9");
    if(stack.length == 0){
        output.innerText = "Stack is empty!";
    } else {
        output.innerText = "Top: " + stack[stack.length - 1];
    }
}

function pop(){
    const output = document.getElementById("output9");
    if(stack.length == 0){
        output.innerText = "Stack is empty!";
    } else {
        let removed = stack.pop();
        output.innerText = "Popped: " + removed;
        showStack();
    }
}

function isEmpty() {
    const output = document.getElementById("output9");
    output.innerText =
      stack.length === 0 ? "Yes, the stack is empty." : "No, the stack is not empty.";
}

function showStack(){
    let area=document.getElementById("stackContainer");
    area.innerHTML="";
    for(let i=stack.length-1;i>=0;i--){
        let item=document.createElement("div");
        item.innerText=stack[i];
        item.style.background="#4CAF50";
        item.style.color = "white";
        item.style.margin = "2px";
    item.style.padding = "5px";
    area.appendChild(item);
    }
}
