const ImportService = require('../service/importService');

class ImportController {
  async processar(req, res) {
    const { etapa, batchId, dados } = req.body;

    // Verifica se os dados essenciais estão presentes
    if (!etapa || !batchId || !dados || dados.length === 0) {
      return res.status(400).json({ erro: 'Dados ausentes ou inválidos no corpo da requisição.' });
    }

    try {
      let resultado;
      if (etapa === 'periodo-letivo') {
        resultado = await ImportService.processarPeriodoLetivo(batchId, dados);
      }

      res.json(resultado);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new ImportController();