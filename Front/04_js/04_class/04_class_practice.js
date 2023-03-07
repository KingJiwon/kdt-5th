class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return super.getArea() / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return 3.14 * this.radius ** 2;
  }
}

const rectangleArea = new Rectangle(2, 4);
const triangleArea = new Triangle(3, 6);
const circleArea = new Circle(1, 2, 3);

console.log(`Rectangle Area : ${rectangleArea.getArea()}`);
console.log(`Triangle Area : ${triangleArea.getArea()}`);
console.log(`Circle Area : ${circleArea.getArea()}`);
