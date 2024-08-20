import { createContext } from "react";
import { useContext } from "react";

//functionalities ke andar sirf naam likte he no defination
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

//basic structure of todo => id,title,completed
//functionalities of todos => add,delete,edit,list
//every todo will be an object
