import React from 'react';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import './TodoList.css'
import { TodoContext } from '../TodoContext';

function TodoList({children}) {
  const {todosLoading : loading, todosError : error} = React.useContext(TodoContext);
  return (
    <ul>
    {loading ? <TodosLoading/> : undefined}
    {error ? <TodosError/> : undefined}
    {!loading && !error && children.length === 0 ? <EmptyTodos/> : undefined}
    {children}
    </ul>
  );
}

export {TodoList};