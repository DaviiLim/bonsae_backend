const express = require('express');
const router = express.Router();
const ImportController = require('../controller/importController.js');

router.post('/import', ImportController.importDados);

//Perguntar qual é o ideal

//router.post('/import/periodo-letivo/:batchId', ImportController.importarPeriodoLetivo);

//router.post('/import/disciplinas/:batchId', ImportController.importarDisciplinas);

module.exports = router;
