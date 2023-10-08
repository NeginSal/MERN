const Todo = ({ todo }) => {
  return (
    <div>
      <p>title - {todo.title}</p>
      <p>description - {todo.description}</p>
      <p>number - {todo.number}</p>
    </div>
  );
}

export default Todo;