const Todo = ({ todo }) => {
  return (
    <div className="border border-lime-900">
      <p>title - {todo.title}</p>
      <p>description - {todo.description}</p>
      <p>number - {todo.number}</p>
      <p>{todo.createdAt}</p>
    </div>
  );
}

export default Todo;