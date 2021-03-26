/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	let evenString = "";
	if (string === undefined) {
		return "missing argument";
	} else
		if (typeof (string) !== "string") {
			return "argument not string";
		}
	for (let i = 0; i < string.length; i++) {
		if (i % 2 !== 0) {
			evenString += string[i];
		}
	}
	return evenString;
}
//console.log(removeEvenCharacters("abcdefgh"))
// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let positiveArray = [];
	for (let element of array) {
		if (element > 0) {
			positiveArray.push(element);
		}
	}
	if (positiveArray.length === 0) {
		return 0;
	}
	return positiveArray.reduce((a, b) => a + b);
}
// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}
// Makes all negative numbers of the input array positive
function makePositive(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			array[i] = Math.abs(array[i]);
		}
	}
	return array;
}
// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	let count = 0;
	let index = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = i; j < array.length; j++) {
			if (array[j] !== 0) {
				break;
			} else {
				count++;
				index = j;
			}
		}
		if (array[i] === 0) {
			array.splice(index - count + 1, count, "*");
			console.log(array);
			count=0;
		}
	}
	return array;
}
