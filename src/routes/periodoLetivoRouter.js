const express = require('express');
const router = express.Router();
const periodoLetivoController = require('../controller/periodoLetivoController.js');

router.get('/periodos', periodoLetivoController.index);
router.get('/periodos/:id', periodoLetivoController.show);
router.post('/periodos', periodoLetivoController.store);
router.put('/periodos/:id', periodoLetivoController.update);
router.delete('/periodos/:id', periodoLetivoController.delete);

module.exports = router;
