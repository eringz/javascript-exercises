const express = require('express');
const router = express.Router();
const Users = require('./controllers/Users');

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

router.get('/', Users.index);

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

module.exports = router;