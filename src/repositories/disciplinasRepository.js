const Disciplina = require('../models/disciplinas.js');

class DisciplinaRepository {
  
  static async criarLote(dados) {
    return await Disciplina.insertMany(dados);
  }

  
  static async buscarPorBatchId(batchId) {
    return await Disciplina.find({ batchId, status: 'pendente' });
  }
}

module.exports = DisciplinaRepository;