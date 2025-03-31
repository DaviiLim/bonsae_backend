const app = require('./app.js');
const connectToMongoDB = require('./config/mongoDB.js');

const PORT = process.env.PORT || 8080;

connectToMongoDB()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Sucesso! - Servidor rodando em http://localhost:${PORT}`);
  });
})
.catch(error => {
  console.error("ERRO MONGO - Falha na conexão!");
});




