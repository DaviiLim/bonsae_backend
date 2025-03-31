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
  campus: { type: String }
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
