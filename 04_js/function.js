// function helloFunc() {
//   console.log("Hello");
// }

// function returnFunc() {
//   console.log("Return");
//   return "return";
// }

// let str = helloFunc();
// console.log(str);

// let str2 = returnFunc();
// console.log(str2);

// let noNameFunc = function () {
//   console.log("No name");
//   return "no name";
// };

// let str3 = noNameFunc();
// console.log(str3);

function sayHello(name = "jiwon") {
  console.log(`hello ${name} ~`);
}

sayHello();
sayHello("mike");

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(10, 20));

// function square(num) {
//   return num ** 2;
// }

// console.log(square(36));
