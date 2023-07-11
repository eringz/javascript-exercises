const express = require('express');
const router = express.Router();
const Students = require('./controllers/Students');

router.get('/', Students.index);
router.get('/login', Students.login);
router.get('/register', Students.register);

module.exports = router;