const express = require('express');
const router = express.Router();
const ImportController = require('../controller/importController.js');

router.post('/import', ImportController.importDados);

module.exports = router;
