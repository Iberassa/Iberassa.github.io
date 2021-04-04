/*
1: For a given array, sum all the elements which are greater than 20.
 [1, 50, 40, 3, 10] => Print result: 90
*/
let arr = [1, 50, 40, 3, 10];
console.log(arr.filter(item => item > 20).reduce((acc, num) => (acc + num), 0));

/*
2: For a given String array, return a new array which contains all
string, length is greater than and equals to 5, and contains letter ‘a’.
*/
function findString(arr) {
	return arr.filter(item => (item.length>5 )&&(item.includes("a")))
}
let arraName = ["John", "Pete","William", "Ivy","Christina", "Martin","Stephine", "Charlie"]
console.log(findString(arraName));
/* 
3:
• Create a constructor function Employee with properties: firstName, lastName, birthdate:
Date type, methods: getFullName(), getAge()
• Create an array with a few Employee objects with different firstName, lastName, birthdate.
• Find if there is any employee which age is greater than 20
• Return a String array which contains the full name of employee and born after 2000
*/

function Employee(firstName, lastName, birthDate) {
	this.getFullName = function () {
		return this.firstName + " " + this.lastName
	}
	this.getAge = function () {
		let bd = new Date(this.birthDate);
		let curentYear = new Date();
		let year = (curentYear.getFullYear()) - (bd.getFullYear());
		if ((bd.getMonth() < curentYear.getMonth())) {
			year = year - 1;
			return year;
		}
		if (bd.getMonth() === curentYear.getMonth()) {
			if (bd.getDate() < curentYear.getDate()) {
				year = year - 1;
				return year;
			}
		}
		return year;
	}
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthDate = birthDate;
	this.fullName = this.getFullName();
	this.age = this.getAge();
	delete this.getFullName
	delete this.getAge
}
let john = new Employee("John", "Pete", "2002-07-25");
let william = new Employee("William", "Ivy", "1988-02-16");
let christina = new Employee("Christina", "Martin", "1999-12-10");
let stephine = new Employee("Stephine", "Charlie", "1995-04-19");
let zard = new Employee("Zard", "Efron", "2000-10-05");
let employeeArray = [john, william, christina, stephine, zard];
console.log(employeeArray)
employeeAgeTwenty = employeeArray.filter(item => item.age > 20)
console.log(employeeAgeTwenty)
employeeAfter = employeeArray.filter(item => ((new Date(item.birthDate)).getFullYear() > 2000))
	.map(item => item.fullName)
console.log(employeeAfter)
