var thinking = 0;
var hungry = 1;
var waiting = 2; //do I really need this waiting state?
var eating = 3;
var totalPhilosophers = 5;
var mutex = 0;
var currentCycle = 0;

var cycles = function () {
    return Math.floor(1 + Math.random() * 10);
}

var getHungry = [cycles(), cycles(), cycles(), cycles(), cycles()]; //takes x cycles to get hunger and enter hungry state
var getFull = [cycles(), cycles(), cycles(), cycles(), cycles()]; //takes x cycles to get full and enter thinking state
var state = [thinking, thinking, thinking, thinking, thinking];
var freeChopstick = [true, true, true, true, true];
var waitingQueue = [];

var left = function (philosopher) {
    return (philosopher + 1)%totalPhilosophers;
}

var right = function (philosopher) {
    return philosopher;
}

var oneCycle = function () {
	console.log("current cycle = " + currentCycle);
	console.log("getHungry = " + getHungry);
	console.log("state = " + state);
	console.log("freeChopstick = " + freeChopstick);
	console.log("waitingQueue = " + waitingQueue);

    for (i = 0; i < 5; i++) {
	    
	}

	whoIsWaiting();
	
    for (i = 0; i < 5; i++) {
//	    isHeEating(i);
	    isHeHungry(i);
//		isHeFull(i);
	}
	
	currentCycle++;
}

/*
if neither of the philosophers on the left or right is eating, go ahead and eat
if either of the philosophers is eating, go to the waiting queue
if either of the philosophers is waiting, go to the waiting queue
*/



var whoIsWaiting = function () {
    for (philosopher = 0; philosopher < waitingQueue.length; philosopher++) {
	    if (freeChopstick[left(philosopher)] && freeChopstick[right(philosopher)]) {
		    waitingQueue.shift();
			state[philosopher] = eating;
			leftChopstick = document.getElementById("chopstick-" + left(philosopher));
			rightChopstick = document.getElementById("chopstick-" + right(philosopher));
			eatingPhilosopher = document.getElementById("eating-" + philosopher);
			leftChopstick.style.visibility = "hidden";
			rightChopstick.style.visibility = "hidden";
			eatingPhilosopher.style.visibility = "visible";
			freeChopstick[left(philosopher)] = !freeChopstick[left(philosopher)];
			freeChopstick[right(philosopher)] = !freeChopstick[right(philosopher)];
			
			console.log("\nI'm being read\n");
			
		} else {getFull[philosopher]++;
		console.log("\nI'm being read\n");};
	}
}



var isHeHungry = function (philosopher) {
    if (getHungry[philosopher] == currentCycle) { //if it has reached the point in time when the philosopher is supposed to be hungry
	    state[philosopher] = hungry; //update the philosopher's state to hungry
		cloud = document.getElementById("thinking-" + philosopher);
		cloud.style.visibility = "hidden";
		getFull[philosopher] = cycles() + currentCycle;
	}

	if (state[philosopher] == hungry && freeChopstick[left(philosopher)] && freeChopstick[right(philosopher)]) {
	    state[philosopher] = eating;
		leftChopstick = document.getElementById("chopstick-" + left(philosopher));
		rightChopstick = document.getElementById("chopstick-" + right(philosopher));
		eatingPhilosopher = document.getElementById("eating-" + philosopher);
		leftChopstick.style.visibility = "hidden";
		rightChopstick.style.visibility = "hidden";
		eatingPhilosopher.style.visibility = "visible";
		freeChopstick[left(philosopher)] = !freeChopstick[left(philosopher)];
		freeChopstick[right(philosopher)] = !freeChopstick[right(philosopher)];
		
		console.log("\nphilosopher is eating\n");
	} else if (state[philosopher] == hungry && (!freeChopstick[left(philosopher)] || !freeChopstick[right(philosopher)])) {
	    waitingQueue.push(philosopher);
		state[philosopher] = waiting;
	}
	

}


var isHeFull = function (philosopher) {
    if (getFull[philosopher] == currentCycle) { //if it has reached the point in time when the philosopher is supposed to be hungry
	    state[philosopher] = thinking; //update the philosopher's state to hungry
		cloud = document.getElementById("thinking-" + philosopher);
		cloud.style.visibility = "visible";

		leftChopstick = document.getElementById("chopstick-" + left(philosopher));
		rightChopstick = document.getElementById("chopstick-" + right(philosopher));
		eatingPhilosopher = document.getElementById("eating-" + philosopher);
		leftChopstick.style.visibility = "visible";
		rightChopstick.style.visibility = "visible";
		eatingPhilosopher.style.visibility = "hidden";
		freeChopstick[left(philosopher)] = !freeChopstick[left(philosopher)];
		freeChopstick[right(philosopher)] = !freeChopstick[right(philosopher)];

		getHungry[philosopher] = cycles() + currentCycle;
	}
}

var simulation = function () {
    setInterval(oneCycle,2000); //this creates an endless loop
//    setTimeout(oneCycle,2000); //this executes once
}

var test = function () {
    philosopher = document.getElementById("chopstick-" + left(4));
	philosopher.style.visibility = "hidden";
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


var isHeEating = function (philosopher) {
    if (state[philosopher] == hungry &&
	    freeChopstick[left(philosopher)] &&
		freeChopstick[right(philosopher)]) {

		state[philosopher] = eating;
		leftChopstick = document.getElementById("chopstick-" + left(philosopher));
		rightChopstick = document.getElementById("chopstick-" + right(philosopher));
		eatingPhilosopher = document.getElementById("eating-" + philosopher);
		leftChopstick.style.visibility = "hidden";
		rightChopstick.style.visiblity = "hidden";
		eatingPhilosopher.style.visibility = "visible";
		freeChopstick[left(philosopher)] = !freeChopstick[left(philosopher)];
		freeChopstick[right(philosopher)] = !rightChopstick[left(philosopher)];

	} else if (state[philosopher] == hungry && 
	    (state[left(philosopher)] == eating || 
		state[right(philosopher)] == eating)) {
	    
		waitingQueue.push(philosopher);
		state[philosopher] = waiting;
	}
		
}

