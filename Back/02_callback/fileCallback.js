// @ts-check

// callbckHell

// const fs = require('fs');
// fs.readFile('./02_callback/test.txt', 'utf-8', function (err, data) {
//   if (err) return console.log(err);
//   console.log('1번', data.toString());
//   fs.readFile('./02_callback/test.txt', 'utf-8', (err, data) => {
//     if (err) return console.log(err);
//     console.log('2번', data.toString());
//     fs.readFile('./02_callback/test.txt', 'utf-8', (err, data) => {
//       if (err) return console.log(err);
//       console.log('3번', data.toString());
//       fs.readFile('./02_callback/test.txt', 'utf-8', (err, data) => {
//         if (err) return console.log(err);
//         console.log('4번', data.toString());
//       });
//     });
//   });
// });

// VER promise

const fs = require('fs').promises;

fs.readFile('./02_callback/test.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./02_callback/test.txt');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./02_callback/test.txt');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('./02_callback/test.txt');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('./02_callback/test.txt');
  })
  .catch((err) => {
    throw err;
  });
