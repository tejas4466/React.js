import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos({ editTodo }) {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <hr className='w-full h-[1.5px] mt-5 bg-black border-0' />
      <div className='mt-2 mb-1 font-mono text-6xl font-semibold text-center'>Todos</div>
      <ul className="flex flex-col items-center justify-center list-none">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between w-3/4 px-4 py-2 mt-4 rounded bg-zinc-800"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className='flex items-center gap-4'>
              <button
                className='px-4 py-1 text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-400 text-md'
                onClick={() => editTodo(todo)}
              >
                ✏️
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-4 py-1 text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600 text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
