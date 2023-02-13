function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중 입니다.`);
  };
}

function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color); // Car생성자 함수의 this 와 생성자를 가져오기 위해 call 메서드 사용
  this.fuel = fuel;
  //오버라이딩
  this.drive = function () {
    console.log(
      `${brand}의 ${color}색 자동차가 ${this.fuel}의 힘으로 주행 중 입니다.`
    );
  };
}

// 상속 받을 ElecCar의 프로토 타입을 Object 객체(최상위 개념)를 사용해서 Car의 프로토 타입과 동일하게 만들어 낸다.
ElecCar.prototype = Object.create(Car.prototype);
// 상속 받을 ElecCar의 생성자는 위에서 선언한 생성자 함수의 것을 따르도록 설정
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar("tesla", "white", "electricity");
tesla.drive();
