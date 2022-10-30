//Task 1
function Car(model, price, year, owner) {
	this.model = model;
	this.price = price;
	this.year = year;
	this.owner = owner;
	this.information = function () {
		document.write('Model - ' + this.model + ' ; ' + 'It cost - ' + this.price + " $ " + ' ; ' + 'Year - ' + this.year);
	}
	this.ownMethod = function () {
		document.write(('<br>') + 'Congratulation ' + this.owner + '!  You bought -');
		this.information();
	}

}
let objTwo = new Car(dataModel, dataPrice, dataYear, dataPerson);
console.log(objTwo);
objTwo.information();
objTwo.ownMethod();