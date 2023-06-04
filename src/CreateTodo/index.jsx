import React from 'react'
import random from 'random'
import './CreateTodo.css'
import { TodoContext } from '../TodoContext'
const placeholders = [
  'Jugar al Mine',
  'Cortar cebolla',
  'Llorar con la llorona',
  'Dormir',
  'Estudiar',
  'Cocinar Raviolis',
  'Ir al gym',
  'Meditar',
  'Entregar reportes',
  'Montar helicoptero',
  'Invadir Panamá'
]
function CreateTodo() {
  const { setCreateTitle, createTitle, createTodo : onCreate } = React.useContext(TodoContext);
  const [placeholder, setPlaceholder] = React.useState("");
  React.useEffect(() => {
      setPlaceholder( random.choice(placeholders) );
  }, [createTitle]);

  return (
      <input
      onChange={(event) => {
        const newCreateTitle = event.target.value;
        setCreateTitle(newCreateTitle);
      }}
      onKeyDown={(event) => {
        if(event.key === "Enter"){
          onCreate()
        }
      }}
      className="create-text"
      type="text"
      placeholder={placeholder}
      value={createTitle}
      />
  )
}

export {CreateTodo}