import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';

const defualtProps = [
  {title: 'Hacer la meditacion', completed:true},
  {title: 'Estudiar Regexp', completed:false},
  {title: 'Estudiar React', completed:true},
  {title: 'Estudiar Universidá', completed:false},
  {title: 'Amar mucho a mi ', completed:true},
]
const defaultTodos = defualtProps.map(({title, completed}, index) => (<TodoItem title={title} completed={completed} key={index}/>))


function App() {
  return (
    <>
        <div className="ctn-main">
          <div className='ctn-todocreate'>
            <h3 className="create-title">Añade tus tareas!</h3>
            <div className="create-todo">
              <CreateTodo/>
            </div>
            <CreateTodoButton/>

          </div>

          <div className='ctn-todoshow'>
            <TodoCounter completed={10} total={11}/>
            <TodoSearch/>
            <TodoList>
              {defaultTodos}
            </TodoList>
          </div>

        </div>
    </>
  );
}

export default App;
