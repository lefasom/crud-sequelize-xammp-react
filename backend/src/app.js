const express = require('express')
const app = express()
const router = require('../router/router')

const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/', router)

// Inicia el servidor en el puerto 8080
app.listen(8080, () => {
  console.log('Servidor Node.js escuchando en el puerto 8080')
});


