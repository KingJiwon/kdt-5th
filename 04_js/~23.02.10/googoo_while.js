let i = 2;

while (i < 10) {
  console.log(`${i} 단`);
  let j = 1;
  while (j < 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}
