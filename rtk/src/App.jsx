import React, { useState } from 'react';
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [editingTodo, setEditingTodo] = useState(null);

  // Function to set the todo item being edited
  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  // Function to clear the editing state
  const clearEditing = () => {
    setEditingTodo(null);
  };

  return (
    <>
      <h1 
        className="p-3 font-mono text-3xl text-center text-white bg-black"
      >
        Todo List
      </h1>
      <AddTodo editingTodo={editingTodo} clearEditing={clearEditing} />
      <Todos editTodo={editTodo} />
    </>
  );
}

export default App;
