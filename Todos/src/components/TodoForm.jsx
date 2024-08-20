import React, { useState } from 'react'
import { useTodo } from '../../contexts'

function TodoForm() {

  const [todo,setTodo]=useState("") //single todo
  const {addTodo} =useTodo()

  const add =(e)=>{
    e.preventDefault()
    if(!todo) return

    addTodo({todo,completed:false})
    setTodo("")//made todo empty
  }




  return (
    <form  className="flex" onSubmit={add}>
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}//wiring of input with state
        onChange={(e)=>{setTodo(e.target.value)}}
    />
    <button type="submit" className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0">
        Add
    </button>
</form>
  )
}

export default TodoForm
