const PeriodoLetivo = require('../models/periodoLetivo.js');

class PeriodoLetivoRepository {
  
  static async criarLote(dados) {
    return await PeriodoLetivo.insertMany(dados);
  }

  
  static async buscarPorBatchId(batchId) {
    return await PeriodoLetivo.find({ batchId, status: 'pendente' });
  }
}

module.exports = PeriodoLetivoRepository;