const express = require('express')
const morgan = require('morgan')
const router = require('./routes/periodoLetivoRouter.js')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/', router)

module.exports = app
