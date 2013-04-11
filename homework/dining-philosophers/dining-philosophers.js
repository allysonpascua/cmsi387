var n = 5; //number of philosophers
var fork;
var left = (fork + n - 1)%n;
var right = (fork + 1)%n
var thinking = 0;
var hungry = 1;
var eating = 2;
var state = [0, 0, 0, 0, 0];
var mutex = 1;

var simulation = function () {
//    setInterval(test,3000); //this creates an endless loop
    setTimeout(test,3000); //this executes once
}

var test = function () {
    philosopher = document.getElementById("eating-0");
	philosopher.style.visibility = "visible";
}

