//문자열
const str = "Hello, World!"; // --> H + e +  l + l + o ... 일종의 배열
console.log(str.length);

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
// 배열에 관련된 함수를 거는 것은 안댐.
// indexOf 문자열 위치 찾기

console.log(str.indexOf("World")); //가장 처음 찾은 index만 리턴  못찾으면 -1

//slice 문자열 자르기

console.log(str.slice(0, 5)); //시작, 종료 위치
console.log(str.slice(0, str.indexOf("World"))); //World 전까지 자르기

//replace 문자열 바꾸기

console.log(str.replace("World", "뽀로로"));
console.log(str); //원본은 바뀌지 않음

//repeat 문자열 반복하기

let str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr);

//trim 문자열 앞뒤 공백 제거하기
const str3 = "       hello, world       ";
console.log(str3.trim());
