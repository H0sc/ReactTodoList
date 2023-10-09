export default function TodoItem({
  id,
  completed,
  title,
  handleCheckbox,
  handleDelete,
}) {
  return (
    <li>
      <label>
        <input
          id="checkbox"
          type="checkbox"
          checked={completed}
          onChange={(e) => handleCheckbox(id, completed, e)}
        />
        {title}
      </label>
      <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  );
}
