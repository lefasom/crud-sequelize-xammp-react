
const User = require('../models/user')


const { Router } = require('express')
const router = Router()

router.get('/getUsers', getUsers = async (req, res) => {
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

router.put('/updateUser/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUser = await User.findByPk(userId);
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      await updatedUser.update(req.body); // Suponiendo que el cuerpo de la solicitud contiene los datos actualizados
  
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.delete('/deleteUser/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByPk(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      await deletedUser.destroy();
      res.json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.get('/getUser/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
module.exports = router