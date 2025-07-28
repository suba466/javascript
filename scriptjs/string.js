let txt="  JavaScript is amazing! Learning JavaScript can be fun and challenging. \u{1F60A}  ";
function lowerCase(){
    document.getElementById("og").innerHTML=txt.toLowerCase();
}
function upperCase(){
    document.getElementById("og").innerHTML=txt.toUpperCase();
}
function replace(){
    document.getElementById("og").innerHTML=txt.replace(/fun/g,"awesome");
}
function count(){
    document.getElementById("og").innerHTML=txt.length;
}
function char(){
    document.getElementById("og").innerHTML=txt[8];
}
function concat(){
    document.getElementById("og").innerHTML=txt.concat(" ","So learn Lava.");
}
function slice(){
    document.getElementById("og").innerHTML=txt.slice(33);
}
function wellFormed(){
    document.getElementById("og").innerHTML=txt.toWellFormed();
}
