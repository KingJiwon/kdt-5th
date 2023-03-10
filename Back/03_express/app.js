// @ts-check
// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const bodyParser = require('body-parser');

const mainRouter = require('./routes/index'); // index는 파일이름 생략 가능
const userRouter = require('./routes/users');
const postRouter = require('./routes/post');

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs'); // viwes 찾아감
app.use(express.static('public')); // front에서 파일 요청하면 public으로
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// localhost:4000
app.use('/', mainRouter);
// localhost:4000/users
app.use('/users', userRouter);
// localhost:4000/posts
app.use('/posts', postRouter);

// error 핸들링 , 콜백함수 인자 네개 다 써야함 use는 다  받기 때문에 사용
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + '</br> <a href = "/"> 홈으로 </a>');
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
