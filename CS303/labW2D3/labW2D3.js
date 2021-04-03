//1: Sum all numbers till the given one
function sum(num) {
	if (num === 1) {
		return num;
	}
	return num + sum(num - 1);
}
console.log(sum(5));
/*
2: - use recursion to implement print() method
➢Use Object literal to create an object named linkedlist which has the following
methods:
➢linkedlist.add(1)
➢linkedlist.remove(2) – remove the first one
➢linkedlist.print() – format: LinkedList{ 1, 2, 5, 7 }
*/
let link = {}
let linkedList = {
	add: function (val) {
		if ((Object.keys(linkedList)).length <= 3) {
			linkedList.value = val;
			linkedList.next = null;
		} else {
			current = linkedList;
			while (current) {
				if (current.next === null) {
					current.next = { value: val, next: null };
					break;
				}
				current = current.next;
			}
		}
	},
	remove: function (val) {
		let current = linkedList;
		while (current) {
			if (current.value === val) {
				if (current.next === null) {
					previous.next = null
					delete current.value;
					delete current.next;
					break;
				}
				current.value = current.next.value;
				current.next = current.next.next;
				break;
			}
			previous = current
			current = current.next;
		}
	},
	print: function () {
		if (!linkedList.next) {
			return linkedList.value;
		} else {
			if (linkedList.next) {
				previous = linkedList
				linkedList = linkedList.next;
			}
			return `${previous.value}, ${this.print()}`
		}
	}
}
linkedList.add(3);
linkedList.add(5);
linkedList.add(8);
linkedList.add(5);
console.log(linkedList);
linkedList.remove(5);
console.log(linkedList);
console.log(`linkedList { ${linkedList.print()} }`);

