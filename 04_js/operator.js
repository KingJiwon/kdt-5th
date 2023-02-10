//나머지 연산자
let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(num % 2);

// 거듭 제곱
console.log(2 ** 4);
console.log(Math.sqrt(4)); //제곱근

//연산자 줄여쓰기
let num2 = 5;
num2 = num2 * 5;

let num3 = 5;
num3 *= 5;

console.log("연산자 줄여쓰기", num2, num3);

//증가, 감소 연선자
let num4 = 10;
console.log("증가 감소 연산자", num4++); //뒤에 붙였기 때문에 다음 부터 반영된다.
console.log(num4);

//비교 연산자
let a = 10;
let b = 5;
let c = "5";

console.log(b == c); //true
console.log(b === c); //false
console.log(a !== b); //자료 형까지 비교
console.log(a > b);
console.log(a < b);
