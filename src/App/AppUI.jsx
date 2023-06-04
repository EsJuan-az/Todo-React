import "./App.css";
import { CreateTodo } from "../CreateTodo";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoContext } from "../TodoContext";
import React from "react";

function AppUI(){
  const {showedTodos, completeTodo, deleteTodo} = React.useContext(TodoContext);
    return (
        <>
          <div className="ctn-main">
            <div className="ctn-todocreate">
              <h3 className="create-title">Añade tus tareas!</h3>
              <div className="create-todo">
                <CreateTodo/>
              </div>
              <CreateTodoButton/>
            </div>
    
            <div className="ctn-todoshow">
              <div className="ctn-count">
                <TodoCounter/>
                <TodoSearch/>
              </div>
    
              <TodoList>
                {showedTodos.map(({ title, completed }, index) => (
                  <TodoItem
                        title={title}
                        completed={completed}
                        key={index}
                        onComplete={() => completeTodo(title)}
                        onDelete={() => deleteTodo(title)}
                  />
                ))}
              </TodoList>
    
            </div>
          </div>
        </>
      );
}

export {
    AppUI
}