//Simulando um front!
const axios = require('axios');

(async () => {
  try {
    const response = await axios.post(`${API_URL}/import`, {
      etapa: 'periodo-letivo',
      batchId: 'batch-123', 
      
      dados: [
        {
          identificacao: '2023.1',
          dataInicial: '2023-01-01',
          dataFinal: '2023-06-30'
        }

      ]
    });

    console.log('Sucesso:', response.data);
  } catch (error) {
    console.error('Erro:', error.response?.data || error.message);
  }
})();