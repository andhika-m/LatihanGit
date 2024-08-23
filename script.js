// Latihan 1: Menyertakan JavaScript ke dalam HTML

window.onload = function () {
	document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
};

// Latihan 2: Variabel dan Tipe Data

let name = "John";
const age = 30;

document.getElementById("output").innerHTML = `Name: ${name}, Age: ${age}`;

let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
	document.getElementById("output").innerHTML += `<br>Fruit: ${fruits[i]}`;
}

let person = { firstName: "John", lastName: "Doe", age: 30 };
document.getElementById(
	"output"
).innerHTML += `<br>First Name: ${person.firstName}, Last Name: ${person.lastName}`;

// Latihan 3: Pengendalian Alur (Control Flow)

function checkValue() {
	let userInput = document.getElementById("userInput").value;

	if (userInput > 10) {
		document.getElementById("output").innerHTML = "Nilai lebih besar dari 10";
	} else if (userInput == 10) {
		document.getElementById("output").innerHTML = "Nilai sama dengan 10";
	} else {
		document.getElementById("output").innerHTML = "Nilai kurang dari 10";
	}

	for (let i = 1; i <= userInput; i++) {
		document.getElementById("output").innerHTML += `<br>${i}`;
	}
}

// Latihan 4: Fungsi dalam JavaScript

function greet(name) {
	return "Hello, " + name;
}

document.getElementById("output").innerHTML += `<br>${greet("Alice")}`;
document.getElementById("output").innerHTML += `<br>${greet("Bob")}`;

function calculateSquare(number) {
	return number * number;
}

document.getElementById(
	"output"
).innerHTML += `<br>Square of 2: ${calculateSquare(2)}`;
document.getElementById(
	"output"
).innerHTML += `<br>Square of 3: ${calculateSquare(3)}`;

let addNumbers = (a, b) => a + b;

document.getElementById(
	"output"
).innerHTML += `<br>Sum of 5 and 7: ${addNumbers(5, 7)}`;

// Latihan 5: Manipulasi Array dan Objek

let students = ["Alice", "Bob", "Charlie"];
students.push("David");

students.forEach(function (student) {
	document.getElementById("output").innerHTML += `<br>Student: ${student}`;
});

let car = { brand: "Toyota", model: "Corolla", year: 2020 };
for (let key in car) {
	document.getElementById("output").innerHTML += `<br>${key}: ${car[key]}`;
}

let cars = [
	{ brand: "Toyota", model: "Corolla", year: 2020 },
	{ brand: "Honda", model: "Civic", year: 2019 },
	{ brand: "Ford", model: "Focus", year: 2018 },
];

cars.forEach(function (car) {
	document.getElementById(
		"output"
	).innerHTML += `<br>${car.brand} ${car.model} (${car.year})`;
});
