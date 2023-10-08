import { useId, useState } from 'react'

import './App.css'

function App() {
  
  const [checked, setChecked] = useState(false)
  const [inputVal, setInputVal] = useState("")
  const [todos, setTodos] = useState([])

  const handleInput = (input) => {
    setInputVal(input)
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos(currentTodos => { return (
          [
            ...currentTodos,
            { id: crypto.randomUUID(), title: inputVal, completed: false },
          ]
        )
      }
    )
    setInputVal("")
  } 

  const handleCheckbox = (id, completed, e) => {

    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          if (todo.completed === true) {
            return { ...todo, completed: false }
          } 
          if (todo.completed === false) {
            return { ...todo, completed: true }
          }
        }
        return todo
      })
    })
  }

  const handleDelete = (id) => {
    // return console.log(todos.filter(todo => todo.id !== id))
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <h1>Todo App!</h1>
      <form action="" onSubmit={e => addTodo(e)}>
        <input type="text" value={inputVal} onChange={e => handleInput(e.target.value)}/>
        <input type="button" value="add" onClick={e => addTodo(e)}/>
      </form>
      <ul>
        {todos !== undefined && todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input id='checkbox' type="checkbox" checked={todo.completed} onChange={(e) => handleCheckbox(todo.id, todo.completed, e)}/>
                {todo.title}
              </label>
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </li>
          )
        })
      }
      {todos === undefined && "todos are undefined"}
      </ul>
    </>
  )
}

export default App
