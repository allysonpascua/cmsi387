var thinking = 0;
var hungry = 1; //(waiting)
var eating = 2;
var totalPhilosophers = 5;
var mutex = 0;
var currentCycle = 0;

var cycles = function () {
    return Math.floor(1 + Math.random() * 10);
}

var getHungry = [cycles(), cycles(), cycles(), cycles(), cycles()]; //takes x cycles to get hunger and enter hungry state
var getFull = [cycles(), cycles(), cycles(), cycles(), cycles()]; //takes x cycles to get full and enter thinking state
var state = [thinking, thinking, thinking, thinking, thinking];

var left = function (philosopher) {
    return (philosopher + 1)%n;
}

var right = function (philosopher) {
    return (philosopher + n - 1)%n;
}

var oneCycle = function () {
    for (i = 0; i < 5; i++) {
	    isHeHungry(i);
	}
	
	currentCycle++;
	console.log("current cycle = " + currentCycle);
	console.log("getHungry = " + getHungry);
	console.log("state = " + state);
}

var isHeHungry = function (philosopher) {
    if (getHungry[philosopher] == currentCycle) { //if it has reached the point in time when the philosopher is supposed to be hungry
	    state[philosopher] = hungry; //update the philosopher's state to hungry
		cloud = document.getElementById("thinking-" + philosopher);
		cloud.style.visibility = "hidden";
	}
}




var simulation = function () {
    setInterval(oneCycle,2000); //this creates an endless loop
//    setTimeout(oneCycle,2000); //this executes once
}

var test = function () {
    philosopher = document.getElementById("eating-0");
	philosopher.style.visibility = "visible";
	console.log("hello");
}


/*
var n = 5; //number of philosophers
var fork;
var left = (fork + n - 1)%n;
var right = (fork + 1)%n
var thinking = 0;
var hungry = 1;
var eating = 2;
var state = [0, 0, 0, 0, 0];
var mutex = 1;

mutex:
- only necessary if you're picking up both chopsticks
you can't really code picking up both chopsticks at the same time
you need to ensure nobody butts in during the time you're picking up both chopsticks (1 line of picking up 1, 1 line picking up another)
- mutex protects the table

mutex lock --> globally pauses everything
mutex unlock --> nobody touches the table until I pick up my chopsticks

monitor --> syntax-condensed version of a semaphore
- Hoare
*/

