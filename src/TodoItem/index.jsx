import './TodoItem.css';

import { FaCheck, FaSkull } from 'react-icons/fa'
function TodoItem({title, completed, onComplete, onDelete}){
    return (
      <li className='TodoItem'>
        <FaCheck
        className={`btn btn-check ${completed && 'btn-check-active'}`}
        onClick={onComplete}
        />
        <span
        className={`todo-text ${completed && 'todo-text-completed'}`}
        >{title}</span>
        <FaSkull
        className='btn btn-delete'
        onClick={onDelete}
        />
      </li>
    )
  }

export {TodoItem}