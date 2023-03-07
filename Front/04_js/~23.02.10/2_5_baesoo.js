let SUM = 0;
for (let i = 0; i < 101; i += 1) {
  if (i % 2 === 0 || i % 5 === 0) {
    SUM += i;
  }
}

console.log(SUM);
