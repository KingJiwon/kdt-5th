function solution(n) {
  let str = "";
  for (i = 1; i < n + 1; i += 1) {
    if (i % 2 === 0) str = str + "박";
    else str = str + "수";
  }
  return str;
}

// function solution2(n) {
//   const str = "수박";
//   return n % 2 === 1 ? str.repeat(Math.floor(n / 2)) + "수" : str.repeat(n / 2);
// }
