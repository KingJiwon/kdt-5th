// @ts-check
const express = require('express');

const router = express.Router();

const app = express();
const USER = {
  1: {
    id: 'jiwon',
    name: '박지원',
  },
};

const USER_ARR = [
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
// 127.0.0.1:4000/users/
router.get('/', (req, res) => {
  res.render('users', { USER_ARR, userCounts: USER_ARR.length });
});

router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID not found');
  }
});

router.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name) {
    return res.end('쿼리 입력이 잘못 되었습니다.');
  }

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };
  USER[Object.keys(USER).length + 1] = newUser;
  res.send('회원 등록 완료');
  //   if (req.query.id && req.query.name) {
  //     const newUser = {
  //       id: req.query.id,
  //       name: req.query.name,
  //     };
  //     USER[Object.keys(USER).length + 1] = newUser;
  //     res.send('회원 등록 완료');
  //   } else {
  //     res.end('Unexpcted query');
  //   }
});

router.put('/modify/id/:id', (req, res) => {
  if (!req.query.id || !req.query.name) {
    return res.send('쿼리 입력이 잘못되었습니다');
  }
  if (!USER[req.params.id]) {
    return res.send('해당 ID를 가진 회원이 존재하지 않습니다.');
  }
  USER[req.params.id].id = req.query.id;
  USER[req.params.id].name = req.query.name;
  //   USER[req.params.id] = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };

  res.send('회원 정보 수정 완료');
});

router.delete('/delete/id/:id', (req, res) => {
  if (!USER[req.params.id]) {
    return res.send('해당 id 정보가 없습니다.');
  }
  delete USER[req.params.id];
  res.send('회원 정보 삭제 완료');
});

app.get('/', (req, res) => {
  res.send('Hello, Express world');
});

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  res.write('<h1>hello, Dynamic Web</h1>');
  for (let i = 0; i < USER_ARR.length; i += 1) {
    res.write(`<h2>USER id is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER name is ${USER_ARR[i].name}</h2>`);
  }
  res.end('');
});

module.exports = router;
