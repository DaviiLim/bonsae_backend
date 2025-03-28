const periodoLetivoRepository = require('../repository/periodoLetivoRepository.js');

class PeriodoLetivoController {
  
  async index(req, res) {
    try {
      const rows = await periodoLetivoRepository.findAll();
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar os períodos letivos.', message: error.message });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const row = await periodoLetivoRepository.findById(id);
      if (!row) {
        return res.status(404).json({ message: 'Período letivo não encontrado.' });
      }
      res.status(200).json(row);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o período letivo.', message: error.message });
    }
  }

  async store(req, res) {
    try {
      const periodo = req.body;
      const row = await periodoLetivoRepository.create(periodo);
      res.status(201).json(row);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o período letivo.', message: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const periodo = req.body;
      const row = await periodoLetivoRepository.update(periodo, id);
      
      if (!row) {
        return res.status(404).json({ message: 'Período letivo não encontrado para atualização.' });
      }

      res.status(200).json(row);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o período letivo.', message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const row = await periodoLetivoRepository.delete(id);

      if (!row) {
        return res.status(404).json({ message: 'Período letivo não encontrado para exclusão.' });
      }

      res.status(200).json({ message: 'Período letivo deletado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o período letivo.', message: error.message });
    }
  }
}

module.exports = new PeriodoLetivoController()
