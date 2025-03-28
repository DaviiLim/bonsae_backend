const mongoose = require('mongoose')

require('dotenv').config()

const connectToMongoDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('MONGO - A conexão foi um sucesso!!')
  }catch(error){
    console.error('MONGO - A conexão foi um fracasso!!', error.message)
    process.exit(1)
  }
}

module.exports = connectToMongoDB
