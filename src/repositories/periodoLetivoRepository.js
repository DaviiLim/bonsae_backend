const PeriodoLetivo = require('../models/periodoLetivo.js');

class PeriodoLetivoRepository {
  
  static async criarLote(dados) {
    try {
      return await PeriodoLetivo.insertMany(dados);
    } catch (error) {
      console.error('Erro ao salvar no banco:', error); // Log detalhado do erro
      throw new Error(error.message); // Retorna a mensagem real do erro
    }
  }  

  
  static async buscarPorBatchId(batchId) {
    return await PeriodoLetivo.find({ batchId, status: 'pendente' });
  }
}

module.exports = PeriodoLetivoRepository;