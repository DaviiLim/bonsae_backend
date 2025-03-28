const mongoose = require('mongoose');

const periodoLetivoSchema = new mongoose.Schema({

    identificacao: { type: String, required: true},
    periodo: { type: String, required: true },
    dataInicial: { type: Date, required: true },
    dataFinal: { type: Date, required: true }

});

const periodoLetivo = mongoose.model('periodoLetivo', periodoLetivoSchema);

module.exports = periodoLetivo;