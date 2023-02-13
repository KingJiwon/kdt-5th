let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}; //화살표 함수로 선언

let sayHallo = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}; //함수 표현식으로 선언

const boy = {
  name: "mike",
  sayHello,
};

const girl = {
  name: "Jane",
  sayHallo,
};

boy.sayHello();
girl.sayHallo();
