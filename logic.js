let age = 20;
if (age >= 18) {
  document.getElementById("ifResult").textContent = "You are eligible to vote.";
}

let temperature = 30;
if (temperature > 35) {
  document.getElementById("ifElseResult").textContent = "It's too hot.";
} else {
  document.getElementById("ifElseResult").textContent = "Weather is normal.";
}

let a = 85;b=58;
if (a+b==143) {
  document.getElementById("ifElseladdResult").textContent = "You are ment to be together.";
} else if(a+b>=143) {
  document.getElementById("ifElseladdResult").textContent = "You are one.";
}else if(a+b<=143) {
  document.getElementById("ifElseladdResult").textContent = "hey.";
}
