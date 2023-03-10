// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const router = express.Router();

const POST = [
  {
    title: 'jiwon의 글',
    content: '박지원',
  },
  { title: 'crong의 글', content: '크롱' },
];
// localhost:4000/posts/
// /posts에 데이터전달
router.get('/', (req, res) => {
  res.render('post', { POST, postCounts: POST.length });
});

// 글 추가 미들웨어
router.post('/add', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.title && req.query.conetent) {
      const newPost = {
        title: req.query.title,
        content: req.query.content,
      };
      POST.push(newPost);
      res.send('게시 완료');
    } else {
      const err = new Error('쿼리 입력이 잘못되었습니다!');
      err.statusCode = 400;
      throw err;
    }
  } else if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };
      POST.push(newPost);
      res.redirect('/posts');
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

// 게시글 수정 미들웨어
// router.put('/modify/id/:id', (req, res) => {
//   if (req.query.email && req.query.name) {
//     const userIndex = USER.findIndex((user) => user.id === req.params.id);
//     if (userIndex !== -1) {
//       USER[userIndex] = {
//         id: req.params.id,
//         name: req.query.name,
//         email: req.query.email,
//       };
//       res.send('회원 정보 수정 완료!');
//     } else {
//       const err = new Error('해당 id를 가진 회원이 없습니다!');
//       err.statusCode = 404;
//       throw err;
//     }
//   } else {
//     const err = new Error('쿼리 입력이 잘못되었습니다!');
//     err.statusCode = 400;
//     throw err;
//   }
// });

// 회원 삭제 미들웨어
// router.delete('/delete/id/:id', (req, res) => {
//   const userIndex = USER.findIndex((user) => user.id === req.params.id);
//   if (userIndex !== -1) {
//     USER.splice(userIndex, 1);
//     res.send('회원 삭제 완료!');
//   } else {
//     const err = new Error('해당 id를 가진 회원이 없습니다!');
//     err.statusCode = 404;
//     throw err;
//   }
// });

module.exports = router;
