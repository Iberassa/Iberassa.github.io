/*
1:
➢Create an object student using object literal which has
➢Properties: firstName:String, lastName:String, grades: Array
➢Methods:
➢inputNewGrade(newGrade): push newGrade to grades
➢computeAverageGrade(): return average of grades
➢Create an Array with multiple students which are created using Object.create();
➢Then compute the average grade for all students in the array
*/
let student = {
	firstName: "",
	lastName: "",
	grades: [],
	inputGrade: function (x, y, z) {
		this.grades = [];
		this.grades.push(x, y, z);
		return this.grades;
	},
	avgGrades: function () {
		let avg = this.grades.reduce((accu, value, index, arr) => accu + value / arr.length, 0);
		return avg;
	}
}

let jhon = Object.create(student);
jhon.firstName = "Jhon";
jhon.lastName = "Connor";
jhon.inputGrade(88, 83, 99)
let mark = Object.create(student);
mark.firstName = "Mark";
mark.lastName = "Frank";
mark.inputGrade(99, 96, 93)
let beth = Object.create(student);
beth.firstName = "Beth";
beth.lastName = "Ali";
beth.inputGrade(77, 89, 95)
let seth = Object.create(student);
seth.firstName = "seth";
seth.lastName = "Rogan";
seth.inputGrade(76, 90, 79)
let lisa = Object.create(student);
lisa.firstName = "Lisa";
lisa.lastName = "George";
lisa.inputGrade(90, 85, 89);

let students = [jhon, mark, beth, seth, lisa];

let avg = (students.map(elem => elem.avgGrades()))
	.reduce((accu, value, index, arr) => accu + value / arr.length, 0);
console.log(avg);

/* 2: Redo the Question 1 using Constructor Function */

function StudentConst(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}
StudentConst.prototype.getGrade = function (x, y, z) {
	this.grade = [];
	this.grade.push(x, y, z);
	return this.grade;
}
StudentConst.prototype.getGradeAvg = function () {
	let avg = this.grade.reduce((accu, value, index, arr) => accu + value / arr.length, 0);
	return avg;
}
let jon = new StudentConst("Jon", "Conor");
jon.getGrade(88, 83, 99);
let melissa = new StudentConst("Melissa", "Macharty");
melissa.getGrade(99, 96, 93)
let matt = new StudentConst("Matt", "Damon");
matt.getGrade(77, 89, 95);
let floyd = new StudentConst("Floyd", "Curtis");
floyd.getGrade(76, 90, 79);
let bob = new StudentConst("Bob", "Steve");
bob.getGrade(90, 85, 89);

let studentArray = [jon, melissa, matt, floyd, bob];
let averageStudentsGrade = studentArray.map((item) => item.getGradeAvg())
	.reduce((accu, value, index, array) => accu + value / array.length, 0)
console.log(averageStudentsGrade);

/* 3: Add a new method named sort() without parameters in built-in constructor function Array.
It’ll sort all elements in the array in ascending order*/
Array.prototype.sort = function () {
	let temp = 0;
	for (let i = 0; i < this.length; i++) {
		for (let j = i + 1; j <= i + 1; j++) {
			if (this[i] > this[j]) {
				temp = this[i];
				this[i] = this[j];
				this[j] = temp;
				i = -1;
			}
		}
	}
	return this;
}

let arra = [300, 5, 2, 9, -180, 1];
console.log(arra.sort())
