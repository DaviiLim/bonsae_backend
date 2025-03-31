const PeriodoLetivoRepository = require('../repositories/periodoLetivoRepository.js');
const DisciplinaRepository = require('../repositories/disciplinasRepository.js');

class ImportService {

  static async processarPeriodoLetivo(batchId, dados) {

    const periodoLetivoExistente = await PeriodoLetivoRepository.findOne({ batchId });
    if (periodoLetivoExistente) {
      throw new Error('Já existe um período letivo com esse batchId!');
    }
    const dadosComBatch = dados.map(item => ({ ...item, batchId, status: 'pendente' }));
    await PeriodoLetivoRepository.create(dadosComBatch);
    return { nextStep: 'disciplinas', dadosComBatch };
  }

  static async processarDisciplinas(batchId, dados) {
    const periodoLetivoExistente = await PeriodoLetivoRepository.findOne({ batchId, identificacao: dados[0].periodoLetivo });
    if (!periodoLetivoExistente) {
      throw new Error('O período letivo com esse batchId e identificacao não existe!');
    }

    const dadosComBatch = dados.map(item => ({ ...item, batchId, status: 'pendente' }));
    await DisciplinaRepository.create(dadosComBatch);
    return { message: 'fim', dadosComBatch };
  }
}

module.exports = ImportService;
