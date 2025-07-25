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