// @ts-check

const express = require('express');

const server = express();

const PORT = 4000;

// http://localhost:4000/api
server.use('/', (req, res, next) => {
  console.log('미들웨어 1');
  req.reqTime = new Date();
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send(`요청 시간은 ${req.reqTime}`);
});

server.use((req, res, next) => {
  console.log('미들웨어 3');
});

server.listen(PORT, () => {
  console.log(`The express server is running at port: ${PORT}`);
});
