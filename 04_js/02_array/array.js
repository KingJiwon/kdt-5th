const kdt = ["박지원", "김민정", "송민영", "이찬호"];

kdt.push("지원");
console.log(kdt);

kdt.pop();
console.log(kdt);

kdt.unshift("지원");
console.log(kdt);

for (let i = 0; i < kdt.length; i += 1) {
  console.log(`5번째 줄의 ${i + 1}번째 참여자의 이름은 ${kdt[i]} 입니다. `);
}
