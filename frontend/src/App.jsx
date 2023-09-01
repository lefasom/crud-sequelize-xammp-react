import { useEffect, useState } from 'react'

import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080"

function App() {

  const [user, setUser] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)


  const listarUsuarios = async () => {

    const res = await axios.get('/getUsers')
    console.log(res.data)
    setUser(res.data)

  }
  const newUser = {
    name: 'nuevoUsuario',
    age: 3,
  };
  const crear = () => {

    axios.post('/createUser', newUser)
      .then((response) => {
        console.log('Usuario creado con éxito:', response.data);
      })
      .catch((error) => {
        console.error('Error al crear el usuario:', error);
      });

  }



  useEffect(() => {
    listarUsuarios()
  }, [])

  return (
    <>
      Nombre:
      <input type="text"
        onChange={(e) => setName(e.target.value)}
      />
      Edad:
      <input type="text"
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        onClick={crear}
      >crear</button>
      <h1>Usuarios</h1>
      {user.map((val) => {
        return (
          <p key={val.id}>{val.id} - Nombre: {val.name} Edad: {val.age}</p>

        )
      })}

    </>
  )
}

export default App
