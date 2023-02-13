class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  }
}

class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }
  showSpec() {
    super.drive();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 작동합니다.`);
  } // 오버 라이딩 : 부모의 메서드를 수정하여 재 정의함 부모 메서드는 변경되지 않음.
}

const hyundai = new Car("hyundai", "blue");

const tesla = new ElecCar("tesla", "red", "electricity");
hyundai.drive();
tesla.showSpec();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
