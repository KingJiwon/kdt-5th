// @ts-check

const express = require('express');

const server = express();

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`The express server is running at port: ${PORT}`);
});

// http://localhost:4000/api
server.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  req.reqTime = new Date(); //  필드를 추가해서 전달 정석x
  req.name = 'jiwon';
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send(`요청 시간은 ${req.reqTime}`);
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 3');
});
