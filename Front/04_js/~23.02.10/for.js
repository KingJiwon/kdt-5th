//기본 반복문
// for(초기화식; 조건식; 증감식)

for (let index = 1; index < 11; index += 1) {
  console.log(`인사를 ${index}번째 드립니다! 🙇🏻‍♂️`);
}

//2중반복문
for (let i = 0; i < 3; i += 1) {
  console.log(`상위 for 문 입니다. ${i + 1} 번째 작동중`);
  for (let j = 0; j < 5; j += 1) {
    console.log(`       하위 for 문 입니다. i는 ${i}, j는 ${j} 입니다!`);
  }
}
