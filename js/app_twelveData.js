//Task 1

let dataPerson;
let dataAge;
let dataPrice;
let dataYear;
let dataModel;
//Data from user about own information
function dataInputName() {
	do {
		dataPerson = prompt('Please input the your name?');
		console.log(dataPerson);
	} while (dataPerson === "" || Number(dataPerson) || dataPerson === null);
}

function dataInputAge() {
	do {
		dataAge = Number(prompt('Please input the your age?'));
		console.log(dataAge);
	} while (dataAge === 0 || dataAge < 18 || isNaN(dataAge) || dataAge === null)
}

//Data from user about properties of car
function carPrise() {
	do {
		dataPrice = Number(prompt('Please input the price of car?'));
		console.log(dataPrice);

	} while (isNaN(dataPrice) || dataPrice === 0 || dataPrice === null);
}

function carYear() {
	do {
		dataYear = Number(prompt('Please input the year of car?'));
		console.log(dataYear);
	} while (isNaN(dataYear) || dataYear === 0 || dataYear === null)

}
function carModel() {
	do {
		dataModel = (prompt('Please input the model car?'));
		console.log(dataModel);
	} while (dataModel === "" || Number(dataModel) || dataModel === null)
}
dataInputName();
dataInputAge();
carModel();
carPrise();
carYear();
