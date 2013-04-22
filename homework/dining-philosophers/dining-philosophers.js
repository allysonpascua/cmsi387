var thinking = 0;
var hungry = 1;
var waiting = 2;
var eating = 3;
var totalPhilosophers = 5;
var currentCycle = 0;

var cycles = function () {
    return Math.floor(1 + Math.random() * 10);
}

var getHungry = [cycles(), cycles(), cycles(), cycles(), cycles()]; //cycles required to get hungery and enter hungry state
var getFull = new Array(totalPhilosophers); //cycles required to get full and enter thinking state
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

    for (i = 0; i < 5; i++) {
        isHeFull(i);
    }

    whoIsWaiting();

    for (i = 0; i < 5; i++) {
        isHeHungry(i);
    }

    currentCycle++;

    console.log("getHungry = " + getHungry);
    console.log("getFull = " + getFull);
    console.log("state = " + state);
    console.log("freeChopstick = " + freeChopstick);
    console.log("waitingQueue = " + waitingQueue + "\n");
}

var isHeFull = function (philosopher) {
    if (state[philosopher] == eating &&
        getFull[philosopher] == currentCycle)
    {
        state[philosopher] = thinking;
        cloud = document.getElementById("thinking-" + philosopher);
        cloud.style.visibility = "visible";
        displayState(philosopher, state[philosopher]);
        getHungry[philosopher] = cycles() + currentCycle + 1;
    }
}

var whoIsWaiting = function () {
    for (philosopher = 0; philosopher < waitingQueue.length; philosopher++) {
        if (freeChopstick[left(waitingQueue[philosopher])] &&
            freeChopstick[right(waitingQueue[philosopher])])
        {
            state[waitingQueue[philosopher]] = eating;
            displayState(waitingQueue[philosopher], state[waitingQueue[philosopher]]);
            getFull[waitingQueue[philosopher]]++;
            waitingQueue.splice(philosopher, 1);
            philosopher--;
        }
        else if (!freeChopstick[left(waitingQueue[philosopher])] ||
                 !freeChopstick[right(waitingQueue[philosopher])])
        {
            getFull[waitingQueue[philosopher]]++;
        }
    }
}

var isHeHungry = function (philosopher) {
    if (getHungry[philosopher] == currentCycle) { //if it has reached the point in time when the philosopher is supposed to be hungry
        state[philosopher] = hungry; //update the philosopher's state to hungry
        cloud = document.getElementById("thinking-" + philosopher);
        cloud.style.visibility = "hidden";
        getFull[philosopher] = cycles() + currentCycle + 1;
    }

    if (state[philosopher] == hungry && freeChopstick[left(philosopher)] &&
        freeChopstick[right(philosopher)])
    {
        state[philosopher] = eating;
        displayState(philosopher, state[philosopher]);
    } else if (state[philosopher] == hungry &&
              (!freeChopstick[left(philosopher)] ||
               !freeChopstick[right(philosopher)]))
    {
        waitingQueue.push(philosopher);
        state[philosopher] = waiting;
    }

}

var displayState = function (p, pstate) {
        leftChopstick = document.getElementById("chopstick-" + left(p));
        rightChopstick = document.getElementById("chopstick-" + right(p));
        eatingPhilosopher = document.getElementById("eating-" + p);
        leftChopstick.style.visibility = (pstate == eating) ? "hidden" : "visible";
        rightChopstick.style.visibility = (pstate == eating) ? "hidden" : "visible";
        eatingPhilosopher.style.visibility = (pstate == eating) ? "visible" : "hidden";
        freeChopstick[left(p)] = !freeChopstick[left(p)];
        freeChopstick[right(p)] = !freeChopstick[right(p)];
}

var simulationEndless = function () {
    setInterval(oneCycle,2000); //this creates an endless loop
}

var simulationStep = function () {
    setTimeout(oneCycle,2000); //this executes once
}