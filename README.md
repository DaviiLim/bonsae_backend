# Bonsae-backend
 
Para que o código funcione, use:
npm install express mongoose dotenv morgan
npm install --save-dev nodemon
npm run dev

No .env você precisa colocar o URL do seu MONGO!

A API expõe os seguintes endpoints para manipular Períodos Letivos:

Método	Rota	Descrição
GET	/periodos	-> Lista todos os períodos letivos
GET	/periodos/:id	-> Busca um período específico
POST	/periodos	-> Cria um novo período letivo
PUT	/periodos/:id	-> Atualiza um período letivo
DELETE	/periodos/:id	-> Remove um período letivo

Você pode testar as requisições usando Postman ou Insomnia
