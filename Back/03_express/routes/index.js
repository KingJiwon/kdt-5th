/* eslint-disable import/no-extraneous-dependencies */
// @ts-check

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
