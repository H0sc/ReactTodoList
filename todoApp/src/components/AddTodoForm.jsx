import { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [inputVal, setInputVal] = useState("");

  const handleInput = (input) => {
    setInputVal(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVal === "") return;
    addTodo(e, inputVal);
    setInputVal("");
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => handleInput(e.target.value)}
      />
      <input type="button" value="add" onClick={(e) => handleSubmit(e)} />
    </form>
  );
}
