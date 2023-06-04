import React from 'react'
import {FaLock, FaPlus} from 'react-icons/fa'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext'
function CreateTodoButton() {
  const { createTitle, createTodo : onCreate } = React.useContext(TodoContext);
  return (
      <button
      className={`create-button ${createTitle.length <= 0 && 'create-button-blocked'}`}
      onClick={() => onCreate(createTitle)}
      >{
        createTitle.length <= 0 ?
        <FaLock/>
        :
        <FaPlus/>
      }</button>
  )
}

export {CreateTodoButton}