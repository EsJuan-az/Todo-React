import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider({children}){
    const {
        item : todos,
        setItem : setTodos,
        loading : todosLoading,
        error : todosError
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState("");
      const [createTitle, setCreateTitle] = React.useState("");
      
    
      const showedTodos = todos.filter((todo) => {
        const todoTitle = todo.title.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoTitle.includes(searchText);
      });
      
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      
      const totalTodos = todos.length;
    
    
      const completeTodo = (text) => {
        let newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.title === text);
        const { title, completed } = newTodos[todoIndex];
        newTodos.splice(todoIndex, 1, { title, completed: !completed });
        setTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        let newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.title === text);
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
      };
    
      const createTodo = () => {
        if(createTitle.length > 0){
          const newTodos = [...todos];
          newTodos.push({
            title: createTitle,
            completed: false
          });
          setTodos(newTodos);
          setCreateTitle("")
        }
      }
    return (
        <TodoContext.Provider
        value={{
            createTitle,
            setCreateTitle,
            createTodo,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            showedTodos,
            completeTodo,
            deleteTodo,
            todosLoading,
            todosError,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext }