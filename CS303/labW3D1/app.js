let prompt = require("prompt-sync")();
// 1: Fix a function that loses “this” (do with bind, wrapper, call, and apply)
function askPassword(ok, fail) {
	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
}
let user = {
	name: 'John',
	loginOk() {
		console.log(`${this.name} logged in`);
	},
	loginFail() {
		console.log(`${this.name} failed to log in`);
	},
};
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//askPassword(function(){user.loginOk()}, function(){(user.loginFail())});
//askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));
//askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));

//2: Partial application for login (do with bind, wrapper, call, and apply)
let user2 = {
	name: 'Mark',
	login(result) {
		console.log(this.name + ' ' + (result ? 'logged in' : 'failed to log in'));
	}
};

//askPassword(user2.login.bind(user2,true),user2.login.bind(user2,false));
//askPassword(function(){user2.login(true)},function(){user2.login(false)});
//askPassword(()=>user2.login.call(user2,true),()=>user2.login.call(user2,false));
//askPassword(()=>user2.login.apply(user2, [true]), ()=>user2.login.apply(user2, [false]));

// 3: Fix the code below using bind
let group = {
	title: "Our Group",
	students: ["John", "Pete", "Alice"],
	showList: function () {
		this.students.forEach(function (student) {
			console.log(this.title + ": " + student);
		}.bind(this));
	}
};
group.showList();
