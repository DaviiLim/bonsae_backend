const PeriodoLetivo = require('../models/periodoLetivo.js');

class PeriodoLetivoRepository {

  static async create(dados) {
    try {
      return await PeriodoLetivo.insertMany(dados);
    } catch (error) {
      console.error('Erro ao salvar no banco:', error); 
      throw new Error(error.message); 
    }
  }

  static async findOne(query) {
    try {
      return await PeriodoLetivo.findOne(query);
    } catch (error) {
      console.error('Erro ao buscar período letivo:', error);
      throw new Error(error.message);
    }
  }
}

module.exports = PeriodoLetivoRepository;
