/*
 1: Write a function printNumbers(from, to) that outputs a number every second, starting from
from and ending with to
*/
function printNumbers(from, to) {
	let i = from
	let printTime = setInterval(function () {
		console.log(i)
		if (i === to) {
			clearInterval(printTime);
		}
		i++;
	}, 1000)
}

/*Question 2:
• In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
• When will the scheduled function run?
• After the loop.
• Before the loop.
• In the beginning of the loop.
• What is alert going to show?
*/

let i = 0;
setTimeout(() => console.log(i), 100); // ?
// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
i++;
}
/*
The for loop will be the first out put and after the loop is done the setTimeout
will be executed.
The output will be 100000000 after the for loop count is done because i was increasing \
wihile the loop was counting  
*/