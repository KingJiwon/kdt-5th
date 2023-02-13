const user = {
  name: "지원",
  sayHello() {
    console.log(`안녕하세요 ${this.name}님`);
  },
};

function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}

const boy = {
  name: "Mike",
  sayHello,
};

const girl = {
  name: "Jane",
  sayHello,
};

boy.sayHello();
girl.sayHello();
sayHello();
