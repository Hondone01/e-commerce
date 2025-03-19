import { useState } from 'react'
import './App.css'
import Estudiante from './components/Estudiante'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola coders</h1>
      <Estudiante name="Pablo" status=" En curso..."/>
      <Estudiante name="Pedro" status=" Finalizado"/>
      <Estudiante name="Elias" status=" Pendiente"/>
      <Estudiante name="Martin" status=" En curso..."/>

      <Button />
    </>
  )
}

export default App
