import { useState } from 'react'
import './App.css'
import Estudiante from './components/Estudiante'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const save = () => {
    console.log("Elemento guardado")
  }
  const deleteElement = () => {
    console.log("Elemento eliminado")
  }

  let persona= {
    name: "Ricardo",
    email: "ricardo@gmail.com"
  }

  let estudiante = {
    ...persona,
    status: "En curso",
    cursos: ["Web development", "SEO", "React.js"]
  }
  console.log("estudiante")
  return (
    <>
      <h1>Hola coders</h1>
      <Estudiante name="Pablo" status=" En curso..."/>
      <Estudiante name="Pedro" status=" Finalizado"/>
      <Estudiante name="Elias" status=" Pendiente"/>
      <Estudiante name="Martin" status=" En curso..."/>

      <Button {... buttonProps} />
      <Button color="red" text= "Delete" onClick={deleteElement}/>
      <Button color="blue" text= "Info" onClick={() => alert("Mi info")}/>
    </>
  )
}

export default App
