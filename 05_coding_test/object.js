const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const resultObj = Object.assign(obj1, obj2);

console.log(obj1);
console.log(obj2);
console.log(resultObj);

console.log(obj1 === resultObj);
resultObj.a = 10;
console.log(obj1);

// 구조분해 할당
const jiwon = {
  name: "박지원",
  age: 26,
  brain: "empty",
};

// const name = jiwon.name; //원래
const { name: jiwonName, age, brain, girlFriend = "없음" } = jiwon; //구조 분해 할당, : 변수명 쓰면 변수명 교체 가능 =사용해서 default 값 줄수 있음
console.log(jiwonName, age, brain, girlFriend);
