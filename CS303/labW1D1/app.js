/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function pow(x, n) {
	return Math.pow(x,n);
}

function add2(n1, n2) {
	return n1 + n2;
}

function add(...args) {
	let count = arguments.length;
	let sum = 0;
	for (let i=0; i<count; i++) {
		sum += arguments[i];		
	}
	
	return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {
	let totalGrade=0
	for (let grade of grades){
		totalGrade += grade
	}
	let avgGrade = totalGrade/grades.length
	if (avgGrade>=90){
		return "A";
	} else if (avgGrade >= 80){
		return "B";
	} else if (avgGrade>= 70){
		return "C";
	} else if (avgGrade >= 60){
		return "D"
	} else if (avgGrade >= 0){
		return "NC"
	}else 
	return "Enter valid grades.";
}
