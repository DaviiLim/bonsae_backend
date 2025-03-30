const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  identificacao: { type: String, required: true },
  dataInicial: { type: Date, required: true },
  dataFinal: { type: Date, required: true },

  batchId: { type: String, required: true }, 
  status: { type: String, enum: ['pendente', 'importado'], default: 'pendente' }
}, { timestamps: true });

module.exports = mongoose.model('PeriodoLetivo', schema);