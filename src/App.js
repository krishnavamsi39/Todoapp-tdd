import React from 'react'
import todoStore from './Store/instances'
import './App.css'
import TodoApp from './Components/TodoApp'
function App() {
  return (
    <div className='App'>
      <TodoApp todoStore={todoStore}/>
      
    </div>
  )
}

export default App
