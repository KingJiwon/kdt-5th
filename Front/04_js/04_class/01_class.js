//생성자 함수 버전
// const hyundai = new ConstructorCar("hyundai", "blue");

// console.log(hyundai);
// hyundai.drvie();
// 생성자 함수는 자동으로 호이스팅이 적용되기 때문에 선언되기 전에 사용되어도 문제가 없다.

function ConstructorCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drvie = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  };
}

const hyundai = new ConstructorCar("hyundai", "blue");

console.log(hyundai);
hyundai.drvie();

//클래스 버전
// const porsche = new ClassCar("porsche", "red");
// const toyota = new ClassCar("toyota", "white");

// console.log(porsche);
// porsche.drvie();
// 클래스는 strict 가 적용되기 때문에 선언전에  사용할 수 없다.

class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drvie() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  }
}
const porsche = new ClassCar("porsche", "red");
const toyota = new ClassCar("toyota", "white");

console.log(porsche);
porsche.drvie();
