const periodoLetivo  = require('../models/periodoLetivoModel.js')

class PeriodoLetivoRepository {

  async findAll(){
    return await periodoLetivo.find()
  }
  async findById(id){
    return await periodoLetivo.findById(id)
  }
  async create(info){
    const periodo = new periodoLetivo(info)
    return await periodo.save()
  }
  async update(info,id){
    return await periodoLetivo.findByIdAndUpdate(id, info, {new: true})
  }
  async delete(id){
    return await periodoLetivo.findOneAndDelete(id)
  }

}

module.exports = new PeriodoLetivoRepository()