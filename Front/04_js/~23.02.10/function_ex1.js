function triangleArea(base, height) {
  return console.log((base * height) / 2);
}

// 화살표 함수
// let triangleArea = (base, height) => {
//   return console.log((base * height) / 2);
// };

function circleArea(radius = 3) {
  return console.log(3.14 * radius ** 2);
}

// let circleArea = (radius = 3) => {
//   return console.log(3.14 * radius ** 2);
// };

function pythagoras(base, height) {
  return console.log(Math.sqrt(base ** 2 + height ** 2));
}

// let pythagoras = (base, height) => {
//   return console.log(Math.sqrt(base ** 2 + height ** 2));
// };

triangleArea(2, 5);
circleArea(5);
pythagoras(3, 4);
