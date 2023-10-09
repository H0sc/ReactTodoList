import { useEffect, useState } from "react";

import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const locallySavedItems = localStorage.getItem("ITEMS")
    if (locallySavedItems === undefined) return []
    return JSON.parse(locallySavedItems)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  const addTodo = (e, title) => {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const handleCheckbox = (id, completed, e) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          if (todo.completed === true) {
            return { ...todo, completed: false };
          }
          if (todo.completed === false) {
            return { ...todo, completed: true };
          }
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    // return console.log(todos.filter(todo => todo.id !== id))
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <h1>Todo App!</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleCheckbox={handleCheckbox}
      />
    </>
  );
}

export default App;
