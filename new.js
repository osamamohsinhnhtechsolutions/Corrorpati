var h = document.getElementById("first");
var A = document.getElementById("a");
var B = document.getElementById("b");
var C = document.getElementById("c");
var D = document.getElementById("d");
var Qns = document.getElementById("qns");

var HintH2 = document.getElementById("hintH2");
var screen = document.getElementById("timer");

var x = 0;
var y = 24;

var tt = setInterval(tm, 1000);
function tm() {
  y = y - 1;
  screen.innerHTML = y;
  if (y <= x) {
    clearInterval(tt);
    A.className = "false";
    B.className = "false";
    C.className = "false";
    D.className = "false";
    Qns.innerHTML = "Time Is Over...";
  }
}

function btn(c) {
  if (c) {
    h.innerHTML = "Sahi Jawab";
    A.className = "false";
    B.className = "false";
    C.className = "true";
    D.className = "false";
    clearInterval(tt);
    setTimeout(abc, 3000);
  } else {
    h.innerHTML = "galat Jawab";
    A.className = "false";
    B.className = "false";
    C.className = "true";
    D.className = "false";
    clearInterval(tt);
  }
}
function abc() {}

function funcHint() {
  HintH2.innerHTML =
    "ek Bandar Ka Banana Road Par Gira to Wo Apna Banana Kahan Dhunde Ga road Ya gali ?";
}
function func50() {
  A.className = "false";
  D.className = "false";
}
function funcpublic() {}
