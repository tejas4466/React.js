import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({ editingTodo, clearEditing }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  // Update input field when editingTodo changes
  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput('');
    }
  }, [editingTodo]);

  // Handler for form submission
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Enter todo");
      return;
    }
    if (editingTodo) {
      dispatch(updateTodo({
        id: editingTodo.id,
        text:input,
      }));
      clearEditing();
    } else {
      dispatch(addTodo(input));
    }
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="flex justify-center w-full mx-auto mt-12 space-x-3">
      <input
        type="text"
        className="w-1/2 px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 font-mono text-lg font-bold text-black bg-indigo-500 border-0 rounded-2xl focus:outline-none hover:bg-indigo- hover:bg-indigo-400"
      >
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
}

export default AddTodo;
