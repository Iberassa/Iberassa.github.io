/*
1:
Answer below questions based on Clock class.
➢ Also add a line of code that will stop the clock after 10 ticks
*/
class Clock {
	constructor({ template }) {
		this.template = template;
	}
	render = () => {
		let date = new Date();
		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;
		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;
		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;
		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);
		console.log(output);
	}
	stop() {
		clearInterval(this.timer);
	};
	start() {
		let count = 1;
		this.render();
		this.timer = setInterval(() => {
			this.render();
			++count;               // counts the ticks
			if (count === 10) {    
				this.stop();
			}
		}, 1000);
	};

}
let clock = new Clock({ template: 'h:m:s' });
//clock.start();

// ➢ What is the inner function of the constructor function?
'there is no function in the constructor'
// ➢ What is the local variable of the constructor function?
'Ther is no local variable'
// ➢ What is the clock “interface” returned by the constructor function?
'clock'
// ➢ What are the closures?
'there is non'
// ➢ What are the private variables and functions?
'there are none'
// ➢ What are the public methods?
' render function,stop function and start function'
// ➢ How does this example illustrate that a JavaScript class is really a function and not an object?
'Clock class is used to call th other methods.'

/*
2:• Create an object student using class syntax which has
• Properties: firstName:String, lastName:String, grades: Array
• Methods:
• inputNewGrade(newGrade): push newGrade to grades
• computeAverageGrade(): return average of grades
• Create an Array with multiple students
• Then compute the average grade for all students in the array
*/

class Student {
	constructor(firstName, lastName, grades) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grades = grades;
	}
	inputNewGrade(...args) {
		this.grades.push(...args);
	}
	computeAverageGrade() {
		let avg = this.grades.reduce((accu, value, index, arr) => accu + value / arr.length, 0)
		return avg;
	}
}
let jhon = new Student("Jhon", "Connor", [88, 83]);
let mark = new Student("Mark", "Frank", [99, 96]);
let beth = new Student("Beth", "Ali", [77, 89]);
let seth = new Student("Seth", "Rogan", [76, 90]);
let lisa = new Student("Lisa", "George", [90, 85]);
let students = [jhon, mark, beth, seth, lisa];
jhon.inputNewGrade(99);
mark.inputNewGrade(93);
beth.inputNewGrade(95);
seth.inputNewGrade(79);
lisa.inputNewGrade(89);

let avarageOfStudentsGrade = students.map(value=>value.computeAverageGrade())
                            .reduce((accu,value,index,arr)=>accu+value/arr.length,0);
console.log(avarageOfStudentsGrade);
