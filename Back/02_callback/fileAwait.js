const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('./02_callback/test1.txt');
  console.log(data.toString());
  data = await fs.readFile('./02_callback/test2.txt');
  console.log(data.toString());
  data = await fs.readFile('./02_callback/test3.txt');
  console.log(data.toString());
  data = await fs.readFile('./02_callback/test4.txt');
  console.log(data.toString());
}

main();
