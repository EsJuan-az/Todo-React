import './TodoItem.css';
import check from './assets/cheque.png';
import del from './assets/borrar.png';
function TodoItem({title, completed}){
    const styleCheck = {
      filter: completed ? 'grayscale(0)' : 'grayscale(1)',
    }
    const styleTitle = {
      textDecoration: completed ? 'line-through #19A7CE' : 'none'
    }
    return (
      <li className='TodoItem'>
          <img className="btn" style={styleCheck}  src={check} alt="check"></img>
        <span style={styleTitle}>{title}</span>
        <img className="btn btn-delete" src={del} alt="del"></img>
      </li>
    )
  }

export {TodoItem}