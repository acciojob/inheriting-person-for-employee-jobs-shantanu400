// complete this js code
class Person{
	
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
	
}

class Employee extends Person{
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle=jobTitle;
	}
	jobGreet(){
	
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}


let Alice=new Person("Alice",25);
Alice.greet();
let bob=new Employee('Bob',30,'Manager');
bob.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
