import React, { useEffect, useState } from 'react'
import { TodoProvider } from '../contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import Logo from './components/Logo'


function App() {

  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])//setTodos provide a callback to take previous todos access
  }

  const updateTodo=(todo,id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo))
  }


//local storage
//when applications loads for first time ho sakta he uske andar todos load krke rke hoye ho and vo todos sbse phele load hone chahiye
//when the application loads for the first time useEffect is the method which queries with the local storage and bring and insert in todos state variable
//jb tk hum brower pe he localStorage ka access kr skte he
//localStoreage.setItem(key,value)
//localStoreage.getItem(key)


  useEffect(()=>{
   const todos=JSON.parse(localStorage.getItem("todos")) //localStorage returns value in string format
   if(todos && todos.length>0){
    setTodos(todos)
   }
  },[])

  //phir se local storage me dale todos
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))//stringify sbko string me convert krta he
  },[todos])


  return (
   
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleComplete,updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8" id="mode">
    <Logo/>
                  <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
                      <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
                    <div className="mb-4">
                      {/*Todo form*/}
                      <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                          {/*Loop and Add TodoItem here */}
                          {todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                            </div>
                          ))}
                  </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App   

//loop ke andar ye div repeat hoga aur har ek div unique he ki nhi ye key use krke pata chalega
//index se itna acha performance nhi milat uske kai drawbacks and pitfalls he
//if key id not given performance is degraded
//map ke andar callback me curly braces lgaya to return krna pdega
//agar parenthesis lgaya to auto return hote he