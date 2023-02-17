//Math
//절댓값
const num1 = -999;
console.log(Math.abs(num1));

//최대, 최소값 구하기

console.log(Math.max(1, 2, 3, 4, -5, 17, 20));
console.log(Math.min(1, 2, 3, 4, -5, 17, 20));

const numArr = [1, 2, 3, -5, 10, 13, 17, -77, 1000];
console.log(Math.min(...numArr)); //전개연산자 :  구조 해체, 뿌려줌

//소수점 관리
const num3 = 3.14;
console.log(Math.round(num3)); //반올림
console.log(Math.floor(num3)); //버림
console.log(Math.ceil(num3)); //올림

//랜덤
console.log(Math.random()); //0~1까지 랜덤숫자 나옴

//실습
let nums = [-1.23, 13, 14.52, -33.53, 30];
//1
console.log(Math.floor(Math.max(...nums)));
console.log(Math.floor(Math.min(...nums)));
//2
let sum = 0;
for (let i = 0; i < nums.length; i += 1) {
  sum += Math.abs(nums[i]);
}
console.log(sum / nums.length);
//3
console.log(Math.floor(Math.random() * 100));
