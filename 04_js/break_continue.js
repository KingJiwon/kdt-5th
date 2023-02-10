for (let i = 1; i < 20; i += 1) {
  if (i % 2 === 1) continue;

  console.log(`${i} 번 입니다.`);

  if (i === 16) break;
}
