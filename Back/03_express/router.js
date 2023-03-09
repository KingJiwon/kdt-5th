// @ts-check

const express = require('express');

const userRouter = require('./routes/users');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});

app.set('view engine', 'ejs'); // viwes 찾아감
app.use(express.static('public')); // front에서 파일 요청하면 public으로
app.use('/users', userRouter);
