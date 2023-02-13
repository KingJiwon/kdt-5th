let num = 1;
let str = "박지원";
let bool = true;
let undef = undefined;
let nul = null;
let arr = [1, 2, 3];
let obj = {
  num: 1,
  str: "String",
};

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof undef);
// console.log(typeof nul);
// console.log(typeof arr);
// console.log(typeof obj);

console.log(`${typeof num} isn't ${typeof str} data type`);
console.log(
  `typeof를 ${typeof bool}이나 null에 사용하면 ${typeof obj}결과를 얻을 수 있습니다.`
);
