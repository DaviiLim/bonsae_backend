const PeriodoLetivoRepository = require('../repositories/periodoLetivoRepository.js');

class ImportService {
  static async processarPeriodoLetivo(batchId, dados) {
    
    const dadosComBatch = dados.map(item => ({
      ...item,
      batchId,
      status: 'pendente'
    }));

    await PeriodoLetivoRepository.criarLote(dadosComBatch);
    return { nextStep: 'disciplinas' };
  }

  static async processarDisciplinas(batchId, dados) {

    const dadosComBatch = dados.map(item => ({
      ... item,
      batchId,
      status: 'pendente'  
    }))

    await PeriodoLetivoRepository.criarLote(dadosComBatch);
    return { nextStep: 'turmas' };
  }
  
}

module.exports = ImportService;

 /**
     * Esse aqui é um validador de formato para o periodo-letivo!
     * Vou deixar comentado por que quero testar o código antes.. 
    const erros = dados
    .filter(item => !item.identificacao.match(/^\d{4}\.\d$/))
    .map(item => ({ campo: 'identificacao', mensagem: 'Formato inválido! (ideal -> YYYY.S)' }));
  
    if (erros.length > 0) return { erros };
     */
  