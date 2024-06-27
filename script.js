// complete this js code
class Person{
	
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	greet(){
		console.log("Hello, my name is ${name}, I am <age> years old.");
	}
	
}

class Employee extends Person{
	constructor(name,age,jobTitle){
		super(name,age);
		
	}
	jobGreet{
		console.log("Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.")
	}
}

function Person(name, age) {}

function Employee(name, age, jobTitle) {}



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
