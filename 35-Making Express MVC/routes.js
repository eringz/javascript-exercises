const express = require('express');
const router = express.Router();
const userController = require('./controllers/Users');

router.get('/', userController.index);
router.post('/result', userController.result);

module.exports = router;