const express = require('express');
const router = express.Router();
const Students = require('./controllers/Students');

router.get('/', Students.index);
router.get('/login', Students.login);
router.get('/register', Students.register);
router.get('/logout', Students.logout);
router.post('/registrationProcess', Students.registrationProcess)


module.exports = router;