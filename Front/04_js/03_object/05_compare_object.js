const jiwon = { name: "박지원", email: "wldnjs0401@naver.com" };

const 지원 = { name: "박지원", email: "wldnjs0401@naver.com" };

console.log(jiwon === 지원);
// 두 객체 안의 메모리 주소값이 다르기 때문에 같지 않다.

const kingjiwon = jiwon;
console.log(kingjiwon.name);
// kingjiwon.name = "jiwon";
console.log(jiwon.name);
console.log(kingjiwon.name);
console.log(jiwon === kingjiwon);
//객체 복사 -> 메모리 주소를 그대로 받아오기 때문에 값 변경 시 원래 객체도 변경됨 따라서 const 쓰고 value 바꿔도 오류x

console.log(JSON.stringify(jiwon) === JSON.stringify(지원));
// 객체 안의 값만 비교할 때
