// @ts-check

const fs = require('fs').promises;

const express = require('express');

const server = express();

const PORT = 4000;

server.use('/', async (req, res, next) => {
  console.log('미들웨어 1번');
  req.reqTime = new Date();
  req.fileContent = await fs.readFile('../package.json', 'utf-8');
  next();
});

server.use((req, res, next) => {
  console.log('미들웨어 2번');
  console.log(`데이터 요청 시간은 ${req.reqTime} 입니다.`);
  console.log(`package.json 파일의 내용은 \n ${req.fileContent}`);
  res.send(req.fileContent);
});

server.listen(PORT, () => {
  console.log(`The express server is running at port: ${PORT}`);
});
