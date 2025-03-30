const PeriodoLetivoRepository = require('../repositories/periodoLetivoRepository.js');

class ImportService {
  static async processarPeriodoLetivo(batchId, dados) {
    const erros = dados.filter(item => !item.identificacao.match(/^\d{4}\.\d$/))
      .map(item => ({ campo: 'identificacao', mensagem: 'Formato inválido (use YYYY.S)' }));
  
    if (erros.length > 0) return { erros };
  
    const dadosComBatch = dados.map(item => ({
      ...item,
      batchId,
      status: 'pendente'
    }));
  

    await PeriodoLetivoRepository.criarLote(dadosComBatch);
  
    return { nextStep: 'disciplinas' };
  }
  
}

module.exports = ImportService;