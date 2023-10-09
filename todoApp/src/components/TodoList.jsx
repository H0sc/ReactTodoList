import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleCheckbox, handleDelete }) {
  return (
    <ul>
      {todos !== undefined &&
        todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              handleCheckbox={handleCheckbox}
              handleDelete={handleDelete}
            />
          );
        })}
      {todos === undefined && "todos are undefined"}
    </ul>
  );
}
