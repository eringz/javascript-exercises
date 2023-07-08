const express = require('express');
const router = express.Router();
const Users = require('./controllers/Users');

router.get('/', Users.index);

module.exports = router;        