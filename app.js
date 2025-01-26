// const product = {
//     name: "black pan",
//     price: 19,
//     rating: 4,
//     offer: 5
// };
// let student = {
//     name: "Zia Uddin",
//     age: 16,
//     marks: 700/100,
//     isPass: true
// }
// let profile ={
//     userName: "Zia Uddin",
//     followors: 1562,
//     isFollow: true
// }
// console.log(profile);
// post and pre concept
// let a = 5
// let b = 2

// console.log( "a = 5", a++)
// console.log(a)
// console.log(++a)

// assignment operators
// let a = 5
// a+= 5
// a-= 5
// a*= 2
// a/= 5
// a%= 5
// a**= 2

// console.log(a)

// Conditional Statement

// alert("Enter your age")

//  let age = 12

// if (age > 18) {
//     document.write("you can vote")
// } else {
//     document.write("You cannot vote")
// }

// let num = prompt("Enter the number")

// if (num%5 === 0) {
//     document.write(num, " is multiple to 5")

// } else {
//     document.write(num, " is not multiple to 5")
// }
// let score = prompt("enter your marks")

// if (score >= 80 && score <= 100) {
//     document.write("You grade is A")

// } else if (score >= 70 && score <= 79) {
//     document.write("You grade is B")
// } else if (score >= 60 && score <= 69) {
//     document.write("You grade is C")
// }else if (score >= 60 && score <= 69) {
//     document.write("You grade is D")
// }else{
//     document.write("Try Again")

// Loops in JS

//     for (let i = 0;  i <= 5; i++) {
//       console.log("i =" ,i);

//     }

// for (let i = 1; i <=100; i++) {
//     console.log("i =", i);

// }

// let sum = 0;
// let i = 1;

// for (let i = 0; i <=10; i++) {
//    sum = sum + i

// }
// console.log("sum =" , sum)

// let sum = 0;
// for (let i = 1;  i<=120; i++) {
//      sum = sum + i //sum = 0 +1

// }
// console.log("sum =", sum)

// while loop
// let i = 0;
// while (i <= 10) {
//    console.log("Zia Uddin");
//     i++;
// }

// for--of loop
// let str ="ZiaUddin"
// let size = 0;

// for (let i of str) {
//     console.log("i =", i);
//     size++

// }
// console.log("size =", size);

// practice loops

// for (let i = 0;  i<=100; i++) {
//    if (i % 2 !== 0) {
//       console.log("i =", i);

//    }

// }

// Q2

// let gameNum = "50"
// let userNum = prompt("Gusse the number? ")

// while (userNum !== gameNum) {
//     prompt("You entered the wrong number,Try again")

// }
// document.write("Congratulation! You won the game")

// .push arrey ku aakhir men values ko add krta h
//.pop arrey ky aakhir se values ko delet krta h
//shift arrey k start se values ko delete krta h
//.unshift arrey ky start men values ko add krta h

// var students = ["aamir", "shahid", "zia"]
// console.log(students);

// students.splice(0,2,)
// console.log(students);

// students.splice(1,1,"aman")
// console.log(students);

// students.slice(0,1)
// console.log(students);

// var fillName = prompt("Enter you Full Name:")

// var userName = "@" + fillName + fillName.length

// console.log(userName);

// var heading = document.querySelector("h1")
// console.log(heading);
// heading.innerText = heading.innerText + "from apna college"

// var divs = document.querySelectorAll(".box")
// console.log(divs);
// divs[0].innerText = "heelloo worlks"
// divs[1].innerText = "zia"
// divs[2].innerText = "mjikl"
// var id = document.querySelector("div")
// console.log(id.setAttribute("class","123"));

// var newBut = document.createElement("button")
// newBut.innerText = "Click Me!"

// newBut.style.color="white"
// newBut.style.backgroundColor="red"

// document.querySelector("body").prepend(newBut)

// var para = document.querySelector("p");

// class Person {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     viewData() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
//     }
// }

// // Use the class name "Person"
// var user = new Person();

// // Calling the method
// user.viewData();

//Code with Harry
//Revision Ultimate JavaScript
// const person = {
//     name: "Zia Uddin",
//     age: 16,
// }
// person.name = "Aamir"

// const dict = {
//     schedule: "Everything went according to schedule (= as had been planned)",
//     schedules: "Various schedules",
//     scheduled: "Planned to happen at a particular time"
// }
// console.log(dict.scheduled)
//Arithmetic Operators
// let a = 10;
// a++;//10 11
// ++a;//12
// a--;//12 11
// --a;//10
// console.log(a);
//Assignment Operators
//=, +=, -=, *=, /=, %=, **=
//Camparison Operators
// ==, ===, !=, !==, >, <, >=, <=
//Logical Operators
// &&, ||, !
//Conditional Statements
// if, else if, else
// practise
// let age = prompt("Enter your age")
// if(age > 10 && age < 20){
//     console.log("You are a teenager")
// }else{
//     console.log("You are not a teenager")

// Q2
/*let age = prompt("Enter your age")
switch (age) {
    case "10":
      console.log("Your age is 10");     
        break;
    case "20":
        console.log("Your age is 20");
        break;
    case "30":
    default:
        break;
}*/
// Q3
/*let num = prompt("Enter the number")
if (num %2 === 0) {
    console.log("The number is divisible by 2"); 
}else if(num % 3 === 0){
    console.log("The is number is divisible by 3");
}else{
    console.log("The number is not divisible by 2 and 3");
}*/

// Q4
/*let age = prompt("Enter your age")
console.log("You can", age > 18 ? "drive" : "not drive");*/

//While Loop

// let number = prompt("Enter the number");
// number = parseInt(number);
// let i = 0;
// while (i <= number) {
//   console.log("i =", i);
//   i++;
// }
// let number = prompt("Enter the number");
// number = parseInt(number);
// let i = 10;
// do {
//   console.log("i =", i);
//   i++;
// } while (i <= number);

// practise Chapter 3
// Q1
// let marks = {
//     physics: 86,
//     maths: 90,
//     chemistry: 75
// }
// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of" + " " + Object.keys(marks)[i] + "is" + Object.values(marks)[i]);

// }
// Q2
// let cn = 4450
// let i
// while (i != cn) {
//     i = prompt("Enter the number")
//     if (i == cn) {
//         break;
//     } else {
//         alert("You have entered wrong number. Try again");
//     }

// }
// console.log("Congratulation! You have entered the correct number");

// Q3
// const student = () => {
//     let name = document.getElementById("name");
//     let age = document.getElementById("age");
//     let grade = document.getElementById("grade");
//     let subjects =  ["Maths", "Physics", "Chemistry", "Biology", "English"];
//     let marks = [];
//     for (let i = 0; i < subjects.length; i++) {
//         marks.push(parseInt(prompt("Enter the marks of" + " " + subjects[i])));
//     }
//     let totalMarks = 0;
//     let averageMarks = 0;
//     for (let i = 0; i < marks.length; i++) {
//         totalMarks += marks[i];
//     }
//     averageMarks = totalMarks / marks.length;

//     name.innerText = "Name:" + prompt("Enter your name");
//     age.innerText = "Age:" + prompt("Enter your age");
//     grade.innerText ="Grade" + prompt("Enter your grade");
//     document.getElementById("totalMarks").innerText = "Total Marks: " + totalMarks;
//     document.getElementById("averageMarks").innerText = "Parcentage: " + averageMarks;
//     document.getElementById("marks").innerText = "Marks: " + subjects + " " + marks;
//     document.getElementById("result").style.display = "block";
//     // document.getElementById("studentForm").style.display = "none";

// }
// student();

// let moodbtn = document.getElementById("changemode");
// var currentMood = "light";
// moodbtn.addEventListener("click", () => {
//   if (currentMood === "light") {
//     currentMood = "dark";
//     document.body.style.backgroundColor = "black";
//   } else {
//     currentMood = "light";
//     document.body.style.backgroundColor = "aqua";
//   }
// });

// let n = "ZiaUddin";
//  n.toUpperCase(n);
//  console.log(n);
// // for (let i = 0; i < name.length; i++) {
// //    console.log(name[i])

// // }

// Ptacrise Chapter 4

// Q1
// console.log("har\"".length);

// Q2
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// // Q3
//  let str = "Hello World"
// str = str.toLowerCase();

// Q4
// let str = "Please give me RS 5000";
// let amount = parseInt(str.slice("Please give me RS".length))

// Array

// Quick Quiz
// let arr = ["Zia", "Aman", "Sufiyan", "Hashir", "Ilyas", "Ashar", "Akhtab", "Ahmed", "Zain", "Zubair"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// practise Chapter 5
// Q1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = prompt("Enter the number");
// arr2 = parseInt(arr2);
// arr.push(arr2)
// console.log(arr);

// // Q2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2;
// do {
//      arr2 = prompt("Enter the number");
//     arr2 = parseInt(arr2);
//     arr.push(arr2)
// } while (arr2 != 0);
// console.log(arr);

// Q3

// let arr = [10, 22, 33, 40, 55, 60, 70, 82, 9, 110];

// arr.filter((element) => {
//     if (element % 10 === 0) {
//         console.log("The number" + " " + element + " " + "is divisible by 10");
//     }
// })

// Q4
// let arr = [10, 22, 33, 40, 55, 60, 70, 82, 9, 110];

// arr.map((element) => {
//     if (element * element) {
//         console.log("The Squre of" + " " + element + " " + "is" + " " + element * element);
//     }
// })

// Q5

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// n = arr.reduce((x1, x2) => {
//     return x1 * x2;
// })
// console.log(n);
// Q1
// var age = prompt("Enter your age")
// if (age > 18) {
//     alert("You are eligible for Amarican Express Credit Card")
// } else {
//     alert("Bary hokr aao!")
// }

// Q2
// let runAgain = true

// const canDrive = (age) => {
//     if (age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// while (runAgain) {
//     let age = prompt("Enter your age")
//     age = parseInt(age);
//     if (age < 0) {
//         console.error("please entered a valid age")
//     }
//     if (canDrive(age)) {
//         alert("You are eligible for Amarican Express Credit Card")
//     } else {
//         alert("Bary hokr aao!")
//     }
//     let runAgain = confirm("Do you want to play again?")
// }

// Q3
// let color = prompt("Enetr the color")
// document.body.style.background = color

// 1. Display Current Day and Time
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let date = new Date();
// let day = date.getDay();
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("Today is :" + days[day]);

// let hour = date .getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();
// console.log("Current time is:" + hour + "PM" + ":" + minute + ":" + second);

// 2. Print Current Window Contents
// Write a JavaScript program to print the current window contents.
// function printWindow() {
//     console.log(window.print);

// 3. Get Current Date in Various Formats
// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// let date = new Date()
// let day = date.getDay()

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let month = date.getMonth()

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// let year = date.getFullYear()

// document.write(days[day] + months[month] + year)

// document.getElementsByTagName("nav")[0].firstElementChild.style.color='red'

// Array.from(document.getElementsByTagName("nav")).forEach((element) => {
//     element.style.background = "red"
// }
// )

// Print even  number fro 0 - 100

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }

// }

// print the table of 12

// for (let i = 1; i <= 10; i++) {
//     let sum = 12 * i
//     console.log(sum);
//     document.getElementById('table').innerHTML += "12 x" + i + "=" + sum + "<br> "

// }

// let bulb = document.querySelectorAll(".bulb")

// function glowing() {
//     let bulb = document.querySelectorAll(".bulb")
//     bulb.forEach((bulb) => {
//         bulb.classList.toggle("glowing")
//     })
// }

// let interval = setInterval(glowing, 300)
//  let userCity = prompt("Enter your City:")
//  let city  = userCity.toLowerCase()
//  let cities = ["karachi", "lahore", "islamabad", "mutan"]
//  for (let i = 0; i < cities.length; i++) {
//      if (cities[i] === city) {
//          alert("Welcome to " + cities[i])
//          break
//      }
//  }

// let txt = `What is Lorem Ipsum?
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
// let newTxt = txt.slice(8, 19)
// console.log(newTxt)

// let txt = `World War 2 began in 1939 and ended in 1945, involving many nations around the world. The war saw the Axis powers, including Germany, Japan, and Italy, fighting against the Allied forces. World War 2 drastically reshaped global politics, economics, and geography.`;
// let newTst  = txt.indexOf('World War 2')
// if (newTst !== -1) {
//     txt = txt.slice(0,newTst) + "World War II" +
//     txt.slice(newTst + 12)
//     console.log(txt)
// }

// let name = 'ziauddin'
// console.log(name.charAt(0).toUpperCase() + name.slice(1))
// let txt = `What is Lorem Ipsum?
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
// var newTxt = txt.replace(/Lorem Ipsum/g, "World War II")

// console.log(newTxt)

// let randomNumber = Math.random()
// let num = Math.floor(randomNumber *6 )+ 1

// switch (num) {
//     case 1:
//         console.log("You got a 1")
//         break;
//     case 2:
//         console.log("You got a 2")
//         break;
//     case 3:
//         console.log("You got a 3")
//         break;
//     case 4:
//         console.log("You got a 4")
//         break;
//     case 5:
//         console.log("You got a 5")
//         break;
//     case 6:
//         console.log("You got a 6")
//         break;
//     default:
//         console.log("Something went wrong")

// let orange = document.getElementById("orange")
// let green = document.getElementById("green") 

// orange.onclick = myFunc("red")
// green.onclick = myFunc("blue")

// function myFunc(color){
//    return function myFunc2() {
//        document.body.style.backgroundColor = color;
//    }
// }

// Promisses & Async/Await
// Promisses Basic
// console.log("Hello World");
// let prom1 = new Promise((resolve, reject) => {
//     let a  = Math.ceil(Math.random() * 100);
//     console.log(a)
//     if (a > 50) {
//         reject("My Side in under maintenance")
//     } else {
//         setTimeout(() => {
//             resolve("Success")
//         }, 3000);
//     }
// }
// )
// prom1.then((_msg) => {
//     console.log("Success");
// }).catch(() => {
//     console.log("My Side in under maintenance");
// })
// Promisses API's
// let prom1 = new Promise((resolve, reject) => {
//   let a = Math.ceil(Math.random() * 100);
//   console.log(a);
//   if (a > 50) {
//     reject("My Side in under maintenance");
//   } else {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   }
// });

// let prom2 = new Promise((resolve, reject) => {
//   let a = Math.ceil(Math.random() * 100);
//   console.log(a);
//   if (a > 50) {
//     reject("My Side in under maintenance please try again later");
//   } else {
//     setTimeout(() => {
//       resolve("Ready to use");
//     }, 1000);
//   }
// });
// let prom3 = Promise.any([prom1, prom2]);
// Promise.all
// Promise.allSettled
// Promise.any

// prom3
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((msg) => {
//     console.log("Promise all Failed");
//   });
// Async/Await
// async function myFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 2000);
//   });
// }
// async function myFunc() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json();
//     return data;
//   }
  
// async function myFunc2() {
//   console.log("Loading Module");
//   console.log("Loading Module 2356");
//   let data = await myFunc();
//   console.log(data);
//   console.log("Loading Module 2356");
//   console.log("Loading Module");
// }

// myFunc2();
//Fetch API
let p = fetch("https://goweather.herokuapp.com/weather/karachi")
p.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response .json();
}).then((data) => {
    console.log(data);
}); 
