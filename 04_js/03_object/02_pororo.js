const pororo = {
  name: "뽀로로",
  age: 7,
  height: 190,
  weight: 120,
  //   running: function () {
  //     console.log("뽀로로가 뜁니다.");
  //   },
  running() {
    console.log("뽀로로가 뜁니다!");
  },
  cute() {
    console.log("뽀로로는 귀엽습니다!");
  },
  hello() {
    console.log(`my name is ${this.name}`);
  },
  showHeight,
};

function showHeight() {
  console.log(`My height is ${this.height}`);
}

// console.log(pororo.name, pororo.age);

// key값 추가1
// pororo.gender = "M";
// console.log(pororo.gender);

// key값 추가2
// pororo["height"] = 194;
// console.log(pororo["height"]);

// key와 value 삭제
// delete pororo.gender;
// console.log(pororo);

// 객체의 key값 존재 여부 확인
// console.log("name" in pororo);
// console.log(pororo.haircolor);

//객체를 이용한 반복문
// for (let key in pororo) {
//   console.log(`key는 ${key}, value는 ${pororo[key]}`);
// }

//메서드 실행
// pororo.running();
// pororo.cute();

pororo.hello();
pororo.showHeight();
