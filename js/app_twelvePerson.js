//Task 1

function Person(name, age) {
	this.name = name;
	this.age = age;

	this.showmethod = function () {
		document.write('Name - ' + this.name + ';' + ' Age ' + this.age + ('<br>'));
	}
}

let objPerson = new Person(dataPerson, dataAge);
console.log(objPerson);
objPerson.showmethod();
