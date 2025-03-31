const express = require('express');
const router = express.Router();
const ImportController = require('../controller/importController');

router.post('/import', ImportController.controller);

module.exports = router;
