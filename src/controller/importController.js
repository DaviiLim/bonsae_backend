const ImportService = require('../service/importService');

class ImportController {
  async processar(req, res) {
    const { etapa, batchId, dados } = req.body;

    if (!etapa || !batchId || !dados || dados.length === 0) {
      return res.status(400).json({ erro: 'ERRO - Dados ausentes ou inválidos!' });
    }

    try {
      let resultado;

      switch (etapa) {

        case 'periodo-letivo':
          resultado = await ImportService.processarPeriodoLetivo(batchId, dados);
          break
        
        case 'disciplina':
          resultado = await ImportService.processarDisciplinas(batchId, dados);
          break
      }

      res.json(resultado);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new ImportController();