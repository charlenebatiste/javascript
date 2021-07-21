console.log(5+5);

console.log("I don't like anchioves");


// conditional

let stopLight = "red";

if (stopLight === "green") {
    console.log("go");
} else if (stopLight === "red") {
    console.log("stop");
} else {
    console.log("slow down");
}

// loops
// while loops

let count = 0;

while(count !== 10) {
    console.log(count);
    count += 1; // will make count equals to count +1 until it reaches 10
    // count++; will do the same thing
}

let countDown = 10;

while(countDown >= 0) {
    console.log("Countdown:", countDown);
    countDown--;
    // countDown -= 2; would count down two at a time 
}

// for loops

for (let i = 0; i < countDown; i++) {
    console.log(i);
}
// sets i equal to 0, checks to see if i is less that countDown, executes whats in the curly brackets, and then adds whats at the back of the () and checks if i <+ countDown again