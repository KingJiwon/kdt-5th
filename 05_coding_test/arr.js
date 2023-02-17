// map 배열의 값에 특정 작업을 한 새로운 배열을 리턴

const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

const fruitsObjArr = fruits.map((item, index) => {
  return {
    id: index,
    name: item,
  };
});

console.log(fruits);
console.log(fruitsObjArr);

//화살표 함수로 줄이기
const nums = [3, 6, 9, 12, 15, 18, 21];
const nums2 = [1, 2, 3, 4, 5, 6];
const divideArr = nums.map((item) => item / 3);
const productArr = nums2.map((item) => item * 4);
console.log(nums);
console.log(divideArr);
console.log(productArr);

//실습
const arr = [...Array(100)].map((item, index) => index + 1);
let sum = 0;
arr.map((item) => (sum += item)); // retrun 없어서 undefined 100개 배열 만들어짐
console.log(sum);

//문자열도 배열이다
const str = "apple";
for (letter of str) {
  console.log(letter);
}

for (letter in str) {
  console.log(letter);
}

const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "tmt",
};

for (item in obj) {
  console.log(obj[item]);
}

//filter 조건에 부합하는 배열요소 반환
const numbers2 = [1, 2, 3, 4, 5, 6];
const filterArr = numbers2.filter((item) => item > 3);
console.log(filterArr);

const words = [
  "spary",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);
console.log(result);

//includes 해당 배열에 지정한 요소가 있는지 확인
let numbers4 = [1, 2, 3, 4, 5, 6];

console.log(numbers4.includes(3));
console.log(numbers4.includes(7));

//실습
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];

let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
let sameArr = [];
let diffArr = [];
fruits1.map((item) => {
  fruits2.includes(item) ? sameArr.push(item) : diffArr.push(item);
});

//find - 특정값 있는지 찾고 값을 반환해줌
const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  return item === "Apple";
});
const findIndexResult = fruits3.findIndex((item) => item === "Banana");
console.log(findResult);
console.log(findIndexResult);

//reduce 가장 많은 기능 - 누산기, 배열값, 인덱스, 원본배열, 누산기 초기값
const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function (acc, item, index, og) {
  return (acc += item);
}, 0);
console.log(sumResult); //배열 말고 값이 리턴됨

const numbers6 = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const result2 = numbers6.reduce(
  (acc, item) => {
    if (item < 0) {
      acc[0]++;
    } else if (item > 0) {
      acc[1]++;
    }
    return acc;
  },
  [0, 0]
);
console.log(result2);

//실습
//1
let numArray = [];
for (let i = 1; i < 101; i++) {
  numArray.push(i);
}
const result3 = numArray.reduce((acc, cur) => (acc += cur), 0);
console.log(result3);
