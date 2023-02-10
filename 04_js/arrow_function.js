// 함수 선언문 -- 호이스팅 지원
function sayHello(name) {
  console.log(`Hello, ${name}`);
}

// 함수 표현식
let sayHello = function (name) {
  console.log(`Hello, ${name}`);
};

// 화살표 함수 -this가 안생겨요
let sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

function sum(num1, num2) {
  return num1 + num2;
}

let sum = function (num1, num2) {
  return num1 + num2;
};

let sum = (num1, num2) => {
  return num1 + num2;
};
