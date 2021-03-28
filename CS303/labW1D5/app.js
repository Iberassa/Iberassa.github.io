/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function countSubstring(s, target) {
    let subStringCount = (s.match(new RegExp(target,'g')));
    if (subStringCount===null){
        return 0;
    } 
return subStringCount.length;
}
// Save obj in localStorage
function saveInLocalStorage(name, obj) {
    let stringObj= JSON.stringify(obj);
    return localStorage.setItem(name,stringObj);     
}

// Return value of name in local storage
function getFromLocalStorage(name) { 
    let stringObj= JSON.stringify({name:"bob", country:"usa", grades:[80,90]});
    localStorage.setItem(name,stringObj);
    return JSON.parse(localStorage.getItem(name));
}

// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound object.
function addMissingProperty(obj) {
    for(let objKey of Object.keys(obj)){
        for(let key of Object.keys(this)){
            if(key===objKey){
                return this
        }
    }
    }
    let thisKey = (Object.keys(obj))[0]
    let thisValue = (Object.values(obj))[0]
    return this[thisKey]=thisValue
}

// Constructor function which creates object {name:name, country:country, creationData:...}
// Where creationDate is the time that the object is created.
function Person(name, country) {
    let creationDate = new Date()
    let personObject = {
        name: name,
        country: country,
        creationDate: creationDate        
    }
    return personObject;
}


// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
    let course = new Map();
    let absences = 0
    for (let studentObj of students){
        course.set(studentObj,absences);
    }
    return course;
}

// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
function incrementAbsences(course, student) {   
    let increament = 1;
    let absence = course.get(student)
    course.set(student,absence+increament)
    return course
}




