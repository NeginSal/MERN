import { useTodosContext } from '../hooks/useTodosContext'

const Todo = ({ todo }) => {
  const { dispatch } = useTodosContext();

  const handleDelete = async () => {
    const response = await fetch('/api/todos/' + todo._id, {
      method: 'DELETE'
    })

    const data = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_TODO', payload: data })
    }
  }



  return (
    <div className="border border-lime-900">
      <p>title - {todo.title}</p>
      <p>description - {todo.description}</p>
      <p>number - {todo.number}</p>
      <p>{todo.createdAt}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Todo;