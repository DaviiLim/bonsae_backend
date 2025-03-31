const Disciplina = require('../models/disciplinas.js');

class DisciplinaRepository {
  static async create(dados) {
    try {

      const disciplinaExistente = await Disciplina.findOne({
        batchId: dados[0].batchId,
        'periodoLetivo.identificacao': dados[0].periodoLetivo.identificacao,
        codigoDisciplina: dados[0].codigoDisciplina
      });

      if (disciplinaExistente) {
        throw new Error('Disciplina com esse período letivo e código já existe!');
      }

      return await Disciplina.insertMany(dados);
    } catch (error) {
      console.error('Erro ao salvar no banco:', error);
      throw new Error(error.message);
    }
  }

  static async buscarPorBatchId(batchId) {
    return await Disciplina.find({ batchId, status: 'pendente' });
  }
}

module.exports = DisciplinaRepository;
