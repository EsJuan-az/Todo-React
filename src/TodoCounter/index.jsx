import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
function TodoCounter(){
    const {completedTodos : completed, totalTodos : total} = React.useContext(TodoContext);
    return (
      completed !== total ? 
      <h3 className='ctn-counter'>
        Completaste <b>{completed}</b> de los <b>{total}</b> TODOs
      </h3>
      :
      <h3 className='ctn-counter'>
      Completaste todas tus tareas!!
      </h3>

    );
}
export {TodoCounter};