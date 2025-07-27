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