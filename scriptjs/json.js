let students=[
    {"id":1,"name":"Suba","marks":97},
    {"id":2,"name":"Shree","marks":70},
    {"id":3,"name":"Google","marks":88},
    {"id":4,"name":"Ammu","marks":67},
    {"id":5,"name":"Thendral","marks":99},
    {"id":6,"name":"Gayathri","marks":77},
    {"id":7,"name":"Kaviya","marks":85},
    {"id":8,"name":"Sathya","marks":100}
];

function display(data){
    let tableBody=document.getElementById("allStudents");
    tableBody.innerHTML="";
    for(let i=0;i<data.length;i++){
        let student=data[i];
        let row=document.createElement("tr");
        row.innerHTML="<td>"+student.id+"</td>"+
                      "<td>"+student.name+"</td>"+
                      "<td>"+student.marks+"</td>";
        tableBody.appendChild(row);
    }
}
window.onload=function(){
    document.getElementById("tableContainer").style.display = "block";
    display(students);
};
function searchDisplay(data){
    let tableBody=document.getElementById("searchStudents");
    let searchBox=document.getElementById("searchContainer");
    tableBody.innerHTML="";
    if(data.length==0){
        searchBox.style.display="none";
        alert("No students found.");
        return;
    }searchBox.style.display="block";
    for(let i=0;i<data.length;i++){
        let student=data[i];
        let row=document.createElement("tr");
        row.innerHTML="<td>"+student.id+"</td>"+
                      "<td>"+student.name+"</td>"+
                      "<td>"+student.marks+"</td>";
        tableBody.appendChild(row);
    }
}
function Search(){
    let tableBody=document.getElementById("searchStudents");
    let key=document.getElementById("inputSearch").value;
    let filtered=[];
    tableBody.innerHTML="";
    if(key==0){
        alert("Please enter student's name.")
    }else{
        for(let i=0;i<students.length;i++){
        if (students[i].name.toLowerCase().includes(key.toLowerCase())) {
            filtered.push(students[i]);
    }}searchDisplay(filtered);
    }
}
function sortDisplay(data){
    let tableBody=document.getElementById("sortStudents");
    let sortBox=document.getElementById("sortContainer");
    sortBox.style.display="block";
    for(let i=0;i<data.length;i++){
        let student=data[i];
        let row=document.createElement("tr");
        row.innerHTML="<td>"+student.id+"</td>"+
                      "<td>"+student.name+"</td>"+
                      "<td>"+student.marks+"</td>";
        tableBody.appendChild(row);
    }
}
function sortByAcc(){
    let tableBody=document.getElementById("sortStudents");
    tableBody.innerHTML="";
    let sorted=students.slice();
    sorted.sort(function(a,b){
        return a.marks-b.marks;
    });sortDisplay(sorted);
}
function sortByDcc(){
    let tableBody=document.getElementById("sortStudents");
    tableBody.innerHTML="";
    let sorted=students.slice();
    sorted.sort(function(a,b){
        return b.marks-a.marks;
    });sortDisplay(sorted);
}
function sort(){
    let tableBody=document.getElementById("sortStudents");
    tableBody.innerHTML="";
    let sorted=students.slice();
    sorted.sort((a,b) =>  a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    sortDisplay(sorted);
}
function deleteDisplay(data){
    let tableBody=document.getElementById("deleteStudents");
    let searchBox=document.getElementById("deleteContainer");
    tableBody.innerHTML="";
    searchBox.style.display="block";
    for(let i=0;i<data.length;i++){
        let student=data[i];
        let row=document.createElement("tr");
        row.innerHTML="<td>"+student.id+"</td>"+
                      "<td>"+student.name+"</td>"+
                      "<td>"+student.marks+"</td>";
        tableBody.appendChild(row);
    }
}
function deleteName(){
   let name=document.getElementById("del").value.trim().toLowerCase();
   if(name==""){
    alert("Please enter a name to delete.");
    return;
   }
   let found=false;
   let filtered=students.filter(students =>{
    if(students.name.toLowerCase()!==name){
        return true;
    }else{
        found=true;
        return false;
    }
   });
   if(!found){
        alert("Student not found.");
        return;}
    students = filtered;
    deleteDisplay(students);
}
