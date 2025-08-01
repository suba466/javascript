const students={
    s1:{no:1,name:"Shree", marks:97},
    s2:{no:2,name:"Thendral", marks:80},
    s3:{no:3,name:"Ammu", marks:66},
    s4:{no:4,name:"Suba", marks:55},
    s5:{no:5,name:"Google", marks:75},
    s6:{no:6,name:"Gayathri", marks:70}
};
function showStudents(){
    const tBody=document.getElementById("allStudents");
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.style.display="block";
    tBody.innerHTML="";
    let count=1;
    for(let key in students){
        const stu=students[key];
        const row="<tr><td>"+stu.no+"</td><td>"+stu.name+"</td><td>"+ stu.marks + "</td></tr>";
        tBody.innerHTML+=row;
        count++;
    }
}
function showMarks(){
    let count=0;
    for(let key in students){
        const stu=students[key];
        if(stu.marks>75){
            count++;
        }
    }
    document.getElementById("output").innerHTML = count + " student(s) scored above 75.";
}
function sort(){
    const sortedBody=document.getElementById("sortedStudents");
    const sortedTable = document.getElementById("sortedTableContainer");
    sortedTable.style.display="block";
    sortedBody.innerHTML="";
    const studentArray=Object.values(students);
    let count=1;
    studentArray.sort((a,b) =>  a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
     for(let stu of studentArray){
        const row="<tr><td>"+count+"</td><td>"+stu.name+"</td><td>"+ stu.marks + "</td></tr>";
        sortedBody.innerHTML+=row;
        count++;
    }
}
function averageMarks(){
    let sum=0;
    let count=1;
    for(let key in students){
         sum += students[key].marks;
         marks=sum/count;
         count++;
        }
    document.getElementById("output2").innerHTML="Average marks = "+marks;
}
const newStudentsList=[];
function promptNewdata(){
    const newdata= {...students.s2};
    newdata.name=prompt("Enter name: ");
    newdata.marks=Number((prompt("Enter marks: ")));
    const newKey="s"+(Object.keys(students).length+1);
    newdata.no=Object.keys(students).length+1;
    students[newKey]=newdata;
    const promptBody = document.getElementById("promptStudents");
    const promptTable = document.getElementById("promptTableContainer");
    promptBody.innerHTML = "";
    promptTable.style.display = "block";
    let count = 1;
    for (let key in students) {
        const stu = students[key];
        const row = "<tr><td>" + count + "</td><td>" + stu.name + "</td><td>" + stu.marks + "</td></tr>";
        promptBody.innerHTML += row;
        count++;
    }
}
function merge(){
    students.s1.name=students.s1.name+"-"+students.s5.name,
    students.s1.marks= Math.round((students.s1.marks + students.s5.marks) / 2)
    delete students.s5;
    const mergeBody = document.getElementById("mergeStudents");
    const mergeTable = document.getElementById("mergeTableContainer");
    mergeBody.innerHTML = "";
    mergeTable.style.display = "block";
    let count=1;
    for (let key in students) {
        const stu = students[key];
        const row = "<tr><td>" + count + "</td><td>" + stu.name + "</td><td>" + stu.marks + "</td></tr>";
        mergeBody.innerHTML += row;
        count++;
    }
}
function combine(){
    const allNames=Object.values(students).map(s=>s.name);
    const sentence=[...allNames].join(",");
    document.getElementById("output5").innerHTML = "All students: " + sentence;
}
