// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const router = express.Router();

const USER = [
  {
    id: 'jiwon',
    name: '박지원',
    email: 'wldnjs0401@naver.com',
  },
  {
    id: 'crong',
    name: '크롱',
    email: 'wldnjs0401@naver.com',
  },
];
// localhost:4000/users/
// /users에 데이터전달
router.get('/', (req, res) => {
  res.render('users', { USER, userCounts: USER.length });
});

// 유저 데이터 미들웨어
router.get('/id/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);
  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('해당 id를 가진 회원이 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

// 회원 추가 미들웨어
router.post('/add', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.query).length >= 1) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER.push(newUser);
      res.send('회원 등록 완료');
    } else {
      const err = new Error('쿼리 입력이 잘못되었습니다!');
      err.statusCode = 400;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    } else {
      const err = new Error('폼 태그 입력을 확인하세요!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력되지 않았습니다.');
    err.statusCode = 400;
    throw err;
  }
});

// 회원 정보 수정 미들웨어
router.put('/modify/id/:id', (req, res) => {
  if (req.query.email && req.query.name) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id);
    if (userIndex !== -1) {
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정 완료!');
    } else {
      const err = new Error('해당 id를 가진 회원이 없습니다!');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('쿼리 입력이 잘못되었습니다!');
    err.statusCode = 400;
    throw err;
  }
});

// 회원 삭제 미들웨어
router.delete('/delete/id/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    USER.splice(userIndex, 1);
    res.send('회원 삭제 완료!');
  } else {
    const err = new Error('해당 id를 가진 회원이 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  res.write('<h1>hello, Dynamic Web</h1>');
  for (let i = 0; i < USER.length; i += 1) {
    res.write(`<h2>USER id is ${USER[i].id}</h2>`);
    res.write(`<h2>USER name is ${USER[i].name}</h2>`);
  }
  res.end('');
});

module.exports = router;
