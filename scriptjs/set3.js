function dob(){
    const dob=new Date(document.getElementById("dob").value);
    const today=new Date();
    let age=today.getFullYear()-dob.getFullYear();
    
    if(age>=18 && age<30){
        document.getElementById("output1").innerText="Valid age: "+age+"years.";
    }else{
        document.getElementById("output1").innerText="Invalid age: "+age+"years.";
    }
}
window.onload = function () {
  const today = new Date();
  function format(date) {
    return date.toISOString().split("T")[0];
  }
  const disabled = [];
  for (let i = -10; i <= 10; i++) {
    if (i === 0) continue; // skip today
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    disabled.push(format(d));
  }
  flatpickr("#myDate", {
    dateFormat: "Y-m-d",
    defaultDate: today,
    disable: disabled
  });
};
function convert(){
    const input=document.getElementById("dateInput").value;
    if(!input){
        document.getElementById("output2").innerText="Please enter a date;";
        return;
    }
    const date=new Date(input);
    const yyyy=date.getFullYear();
    const mm=String(date.getMonth()+1).padStart(2,'0');
    const dd=String(date.getDate()).padStart(2,'0');
    const numberFormat = Number(`${dd}${mm}${yyyy}`);
    document.getElementById("output2").innerText="Converted Number: "+numberFormat;
}
function dimension(){
    const input=document.getElementById("image");
    const output=document.getElementById("output3");

        const file=input.files[0];
        if(!file){
          output.innerText="Please select an image."
          return;}
        const img=new Image();
        img.onload=function(){
            output.innerText=`Width:${img.width}px, Height:${img.height}px`;
        };
        img.src=URL.createObjectURL(file);
}
function url(){
  const currentURL=window.location.href;
  document.getElementById("output4").innerText=currentURL;
}
function timer(){
  let time = Number(document.getElementById("timerInput").value);
  const display=document.getElementById("output5");
   if (isNaN(time) || time < 0) {
    display.innerText = "Please enter a valid positive number.";
    return;
  }
  const countDown=setInterval(()=>{
    display.innerText=`Time Left: ${time} seconds`;
    time--;
    if(time<0){
      clearInterval(countDown);
     display.innerText="Time's up!";
    }
  },1000);
}
function adjustWidth(){
  const input=document.getElementById("dynamicInput");
  const length=input.value.length;
  input.style.width=`${Math.max(4,length)}ch`;
}
function generateRange(){
  const start=document.getElementById("startRange").value;
  const end=document.getElementById("endRange").value;
  const output=document.getElementById("output8");
  if(!start || !end){
    output.innerText="please enter both start and end values.";
    return;
  }
  const isNumberRange=!isNaN(start)&&!isNaN(end);
  let result=[];
  if(isNumberRange){
    const startNum=Number(start);
    const endNum=Number(end);
    if (startNum>endNum){
      output.innerText="Start number should be less than or equal to the end number.";
      return;
    }for(let i=startNum;i<=endNum;i++){
     result.push(i);
    }
  }else{
    const startCharCode=start.charCodeAt(0);
    const endCharCode=end.charCodeAt(0);
    if(startCharCode>endCharCode){
      output.innerText="Start character should come befor the end charcter.";
      return;
    }
    for(let i=startCharCode;i<=endCharCode;i++) {
      result.push(String.fromCharCode(i));
    }
  }
  output.innerText="Range: "+result.join(", ");
}
function getExtension(){
  const input=document.getElementById("getFile");
  const file=input.files[0];
  if(!file){
    document.getElementById("output9").innerText="Please upload a file.";
    return;
  }
  const fileName=file.name;
  let extension="";
  if(fileName.includes(".")){
    extension=fileName.split(".").pop().toLowerCase();
    document.getElementById("output9").innerText=`File extension: .${extension}`;
  }else{
    document.getElementById("output9").innerText = "No file extension found.";
  }
}