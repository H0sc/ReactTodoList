import { useState } from "react"

export default function TodoList() {

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
    )
}