function reverse(){
    const input=document.getElementById("input1").value;
    document.getElementById("output1").innerText=input.split("").reverse().join("");
}
function reverse1(){
    const input=document.getElementById("input2").value;
    const words=input.split(" ");
    const reverseWords=words.map(word=>word.split("").reverse().join(""));
    document.getElementById("output2").innerText=reverseWords.join(" ");
}
function compare(){
    const str1=document.getElementById("input3").value;
    const str2=document.getElementById("input4").value;
    const rev1=str1.split("").reverse().join("");
    const rev2=str2.split("").reverse().join("");
    if(rev1==rev2){
        document.getElementById("output3").innerText="Strings are same even after reversed.";
    }else{
        document.getElementById("output3").innerText="Strings are not same.";
    }
}
function count(){
    const input=document.getElementById("input5").value.toLowerCase();
    const vowels=['a','e','i','o','u'];
    let count=0;
    for(let char of input){
        if(vowels.includes(char)){
            count++;
        }
    }
    document.getElementById("output4").innerText="Vowel count: "+count;
}
function check(){
    const str1=document.getElementById("input6").value;
    const str2=document.getElementById("input7").value;
    let sortedstr1=str1.toLowerCase().replace(/\s/g, "").split("").sort().join("");
    let sortedstr2=str2.toLowerCase().replace(/\s/g, "").split("").sort().join("");
    if(sortedstr1==sortedstr2){
        document.getElementById("output5").innerText="Both the strings are anagram.";
    }else{
        document.getElementById("output5").innerText="Both the strings are not an anagram.";
    }
}
function truncate(){
    const str=document.getElementById("input8").value;
    let maxlength=parseInt(document.getElementById("input9").value);
    if(isNaN(maxlength)){
        document.getElementById("output6").innerText="PLease enter the valid number.";
    }
    let result;
    if(str.length>maxlength){
        result=str.slice(0,maxlength)+"...";
    }else{
        result=str;
    }
    document.getElementById("output6").innerText=result;
}
function replace(){
    const str=document.getElementById("input10").value;
    const result=str.replaceAll(/[eiu]/gi, "@");
    document.getElementById("output7").innerText=result;
}
function sort(){
    const str=document.getElementById("input11").value;
    const words=str.split(" ");
    const sortedWords=words.sort((a,b) =>  a.toLowerCase().localeCompare(b.toLowerCase()));
    document.getElementById("output8").innerText=sortedWords.join(" ");
}
function count1(){
    const str=document.getElementById("input12").value;
    let alphabetCount=0;
    let digitsCount=0;
    for(let char of str){
        if(/[a-zA-Z]/.test(char)){
            alphabetCount++;
        }else if(/[0-9]/.test(char)){
            digitsCount++;
        }
    }
    document.getElementById("output9").innerText="Alphabets: "+alphabetCount+"\nDigits: "+digitsCount;
}
function check1(){
    const str=document.getElementById("input13").value;
    if(/^[a-zA-Z]$/.test(str)){
        document.getElementById("output10").innerText="THe string contains only alphabets."
    }else{
        document.getElementById("output10").innerText="THe string also contains other characters."
    }
}