const express = require('express');
const router = express.Router();
const Cars = require('./controllers/Cars');

router.get('/', Cars.index);
router.post('/reset', Cars.reset);

module.exports = router;        