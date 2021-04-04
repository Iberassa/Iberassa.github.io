/*
➢ Draw a lexical environment diagram for the right
code and show:
➢ global lexical environment (LE)
➢ LE for makeArmy()
➢ LE for LE of the while loop
➢ LE for army[0]
➢ What will army[0] alert?
➢ Can you fix the code?
➢ How will the diagram change?
*/

/*
Global Execution Context:-
  Creation(Hoisting)   
    LE { function=makeArmy,  outer=null}                    TDZ{army} 
	    this=window
  Execution
    LE	{army = makeArmmy()}   ----- army comes out of TDZ
     Execution Paused

makeArmy() Execution context:-
  Creation(Hoisting)
     LE {function= argument{length =0}, outer = global}          TDZ{shooters,i}
         this = window
  Execution 
     LE { shooters=[], i=0 }   shooter and i will come out of TDZ
	 Execution Paused

while loop Execution context:-
   Creation(Hoisting)
      LE{argument(i=0), outer=makeArmy }                 TDZ{shooter}
	  this = window
   Execution
      {LE sargument checked (i<1), hooter= function(){} }    shooter will come out of TDZ
       shoooters=[function() {console.log(i);};],
	   i=0; after the line is done
	   i=1
	   then it will end this execution

while loop Execution context:-
   Creation(Hoisting)
      LE{argument(i=1), outer=makeArmy }                 TDZ{shooter}
	  this = window
   Execution
      {LE argument checked (i<1),shooter= function(){} }       shooter will come out of TDZ
       shoooters=[function() {console.log(i);};, function() {console.log(i);};]
	   i=1; after the line is done
	   i=2
	   then it will end this execution

	   while loop Execution context:-
   Creation(Hoisting)
      LE{argument(i=2), outer=makeArmy }                 TDZ{shooter}
	  this = window
   Execution
      {LE argument checked (i<1) this will be false}
	  then it will end this execution then it will return to the makeArmy Execution
	  

makeArmy() Execution context will be resumed
  Creation(Hoisting)
     LE {function= argument{length =0}, outer = global}          TDZ{shooters,i}
         this = window
  Execution 
     LE { shooters=[], i=0 }   shooter and i will come out of TDZ
	 shooters = [function() {console.log(i);};, function() {console.log(i);};]
	 then the makeArmy() will end and get out of the stack
	 
	The Global EC will continue
	Global Execution Context:-
  Creation(Hoisting)   
    LE { function=makeArmy,  outer=null}                    TDZ{army} 
	    this=window
  Execution
    LE	{army = makeArmmy()}   ----- army comes out of TDZ
   army = shooters = [function() {console.log(i);};, function() {console.log(i);};]
   army[0] means function() {console.log(i);};
   ther will be nothing on the output;   
*/
function makeArmy() {
	let shooters = [];
	let i = 0;
	while (i < 2) {
	let shooter = function() {
	return i;
	};
	shooters.push(shooter());
	i++;
	}
	return shooters;
	}
	let army = makeArmy();
	console.log(army[0]);
/*
if the return in the shooter function is added and the push in the shooters array
becomes the the shooter function call the array will be the values of i and we can console
the armyto get each item in the array.  
*/
	