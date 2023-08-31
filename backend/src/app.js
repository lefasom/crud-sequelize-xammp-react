const express = require('express')
const app = express()

const { Router } = require('express')
const router = Router()

const cors = require('cors')

const { Sequelize } = require('sequelize')
const { DataTypes } = require('sequelize')

const sequelize = new Sequelize('empresa', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true, // Habilita createdAt y updatedAt
});



router.get('/getUsers', getUsers = async(req, res) => {
  const resp = await User.findAll()
       res.json(resp)
})
router.post('/createUser', async (req, res) => {
  console.log(req)
  try {
    const newUser = await User.create(req.body); // Suponiendo que el cuerpo de la solicitud contiene los datos del nuevo usuario
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.use(express.json())
app.use(cors())
app.use('/', router)

// Inicia el servidor en el puerto 8080
app.listen(8080, () => {
  console.log('Servidor Node.js escuchando en el puerto 8080')
});


