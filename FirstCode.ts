// function greetings(person) {
//     return "Happy New Year " + person;
// }

// function vaccinationDose(one, two) {
//     return "Fully Vaccinated means " + one +" , " + two;
// }

// let user = "Himanshu";
// console.log(greetings(user));

// console.log(vaccinationDose("First Dose","Second Dose"));

// let first: number = 12.0; // number
// let second: number = 0x37CF; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary
// let userName: string = "Himanshu"; // String
// let isDone: boolean = false;

// let val: any = "Hi";
// val = 555; // ok
// val = true; // ok

// console.log(first + " , " + second + " , " + third + " , " + fourth);
// console.log(userName + " , " + isDone + " , " + val);

// function ProcessData(x: any, y: any) {
//     return x + y;
// }

// let result: any;
// result = ProcessData("Himanshu", " Sharma"); // result: Himanshu Sharma 
// console.log(result);
// result = ProcessData(2,3); // result: 5
// console.log(result);

// var list: number[] = [1,3,5]; // This is the first way of declaration
// console.log(list);
// var list : Array<number> = [1,3,5]; // This is the second way of declaration
// console.log(list);

// let a: [string, number]; // Declaring a tuple
// a = ["Hi", 8 ]; //ok
// console.log(a);

// interface Calc {
//     subtract(first: number, second: number): any;
// }

// let Calculator: Calc = {
//     subtract(first: number, second: number) {
//         return first - second;
//     }
// }

// class Employee {
//     Role: any;
//     Name: string;
//     constructor(Role: number, Name: string) {
//         this.Role = Role;
//         this.Name = Name;
//     }

//     showDetails() {
//         console.log(this.Role + " : " + this.Name);
//     }
// }

// let n1 = 10, n2 = 22, n3 = 25;
// if(n1 >= n2) {
//     if(n1 >= n3) {
//         console.log("The Largest Number is: " + n1);
//     }
//     else {
//         console.log("The Largest Number is: " + n3);
//     }
// }
// else {
//     if(n2 >= n3) {
//         console.log("The Largest Number is: " + n2);
//     }
//     else {
//         console.log("The Largest Number is: " + n3);
//     }
// }

// let a = 3;
// let b = 2;

// switch(a+b) {
//     case 1:  {
//         console.log("a+b is 1");
//         break;
//     }
//     case 2:  {
//         console.log("a+b is 5");
//         break;
//     }
//     case 3:  {
//         console.log("a+b is 6");
//         break;
//     }
//     default:  {
//         console.log("This is default a+b is 5");
//         break;
//     }
// }

// let num = 4;
// let factorial = 1;
// while(num >= 1) {
//     factorial = factorial * num;
//     num--;
// }
// console.log("The Factorial of the Given Number is: " + factorial);

// let n = 10;
// do {
//     console.log(n);
//     n++;
// }while(n<=15);

// let str: any = "Angular Application";

// for(let index in str) {
//     console.log(`Index of ${str[index]}: ${index}`);
// }

// enum Direction {
//     Up = 1.2,
//     Down,
//     Left,
//     Right,
// }
// console.log(Direction);

// enum AppStatus {
    // ACTIVE = 'ACT',
    // INACTIVE = 'INACT',
    // ONHOLD = 'HLD',
    // ONSTOP = 'STOP'

//     ACTIVE = 'Yes',
//     INACTIVE = 1,
//     ONHOLD = 2,
//     ONSTOP = 'STOP'
// }
// console.log(AppStatus);


// let apps = ['WhatsApp', 'Instagram', 'Facebook'];
// let playStore = [];

// apps.forEach(function(item) {
//      playStore.push(item);
// });

// console.log(playStore);

// let num = [5,10,15];
// let playStore = [];

// num.forEach(function(value) {
//     console.log(value);
// });


// let ageMapping = new Map();

// ageMapping.set("Rakesh", 40);
// ageMapping.set("Abhishek", 25);
// ageMapping.set("Amit", 30);

// // iterate over map keys
// for(let key of ageMapping.keys()) {
//     console.log("Map Keys = " + key);
// }

// // iterate over map values
// for(let value of ageMapping.values()) {
//     console.log("Map Values = " + value);
// }

// console.log("The Map Entries are: " );
// // iterate over map entries
// for(let entry of ageMapping.entries()) {
//     console.log(entry[0], entry[1]);
// }

// class Employee {
//     empCode: number;
//     empName: string;

//     constructor(code: number, name: string) {
//         this.empCode = code;
//         this.empName = name;
//     }

//     showDetail = () => console.log("Employee Code: " + this.empCode + "\nEmployee Name: " + this.empName);
// }

// let emp = new Employee(101, "Himanshu Sharma");
// emp.showDetail();

// var getScores = (username: string, points: number): string => {
//     return `${username} scored ${points} in the game`;
// };

// console.log(getScores('Himanshu Sharma', 100));

// interface Person {
//     name: string;
//     age: number;
// }

// interface Employee extends Person {
//     gender: string;
//     empCode: number;
// }

// let empObject = <Employee>{};
// empObject.name = "Abhishek";
// empObject.age = 25;
// empObject.gender = "Male";
// empObject.empCode = 43;
// console.log("Name: " + empObject.name);
// console.log("Employee Code: " + empObject.empCode);

// Single Inheritance
// class Shape {
//     Area: number;
//     constructor(area: number) {
//         this.Area = area;
//     }
// }
// class Circle extends Shape {
//     display(): void {
//         console.log("Area of the Circle: " + this.Area);
//     }
// }

// var obj = new Circle(320);
// obj.display();

// MultiLevel Inheritance
// class Animal {
//     eat(): void {
//         console.log("Eating");
//     }
// }
// class Dog extends Animal {
//     bark(): void {
//         console.log("Barking");
//     }
// }
// class BabyDog extends Dog {
//     weep(): void {
//         console.log("Weeping");
//     }
// }

// let obj = new BabyDog();
// obj.eat();
// obj.bark();
// obj.weep();


// Generic Type
// class StudentInfo<T,U> {
//     private Id: T;
//     private Name: U;
//     setValue(id: T, name: U): void {
//         this.Id = id;
//         this.Name = name;
//     }
//     display(): void {
//         console.log(`Id = ${this.Id}, Name = ${this.Name}`);
//     }
// }
// let st = new StudentInfo<number, string>();
// st.setValue(101, "Virat");
// st.display();
// let std = new StudentInfo<string, string>();
// std.setValue("201", "Rohit");
// std.display();

interface People {
    name: string;
    age: number;
}

interface Celebrity extends People {
    profession: string;
}

function printName<T extends Celebrity>(theInput: T): void {
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);
}

let player: Celebrity = {
    name: 'Rohit Sharma', age: 30, profession:'Cricket Player' 
}

printName(player);