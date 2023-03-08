// @ts-check

const express = require('express');

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 실행중`);
});

app.get(
  '/email/:email/password/:password/name/:name/gender/:gender',
  (req, res) => {
    console.log(req.params);
    res.send(req.params);
  }
);

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
