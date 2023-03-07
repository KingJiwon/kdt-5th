//  ---> Hello, olleH
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

let helloStr = helloTestArr.join("");
console.log(helloStr);

let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

let resultStr = reverseHelloTestArr.join("");
console.log(resultStr);

// .split : 문자를 인수 기준으로 쪼개서 배열로 반환
// .join : 배열을 인수 기준으로 문자로 병합허여 반환
//.reverse : 배열의 순서를 뒤집어서 변환

let final_Str = helloTest.split("-").reverse().join(""); //메소드 체이닝 : 메소드를 연결해서 여러개 사용
console.log(final_Str);

const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

let testStr = obj.str?.reverse().join(""); //올바른 type에 메소드를 사용해야함. ? 사용 시 undefined 나오면 그뒤에껀 무시하고 undefined 출력해서 error 막음
// 이거보단 나중에 try catch를 쓸 것
console.log(testStr);
