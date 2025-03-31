const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisciplinaSchema = new Schema({
  periodoLetivo: { type: String, required: true }, 
  disciplina: { type: String },
  codigoDisciplina: { type: String, required: true }, 
  dataInicial: { type: Date },
  dataFinal: { type: Date },
  categoria: { type: String },
  periodoCurricular: { type: String },
  estado: { type: String },
  campus: { type: String },

  batchId: { type: String, required: true }, 
  status: { type: String, enum: ['pendente', 'importado'], default: 'pendente' }
}, { timestamps: true });

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
