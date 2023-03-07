// @ts-check

function knockDoor(name, time, callback) {
  console.log('노크를 하고 기다립니다!');
  setTimeout(() => {
    callback(name, time);
  }, time * 1000);
}

function callName(name, time) {
  console.log(`${name}이가 ${time}초 만에 문을 열고 나왔습니다..`);
}

knockDoor('지원', 3, callName);
