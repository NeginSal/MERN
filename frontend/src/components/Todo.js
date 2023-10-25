import { Link } from "react-router-dom";
import { useTodosContext } from '../hooks/useTodosContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from "../hooks/useAuthContext";


const Todo = ({ todo }) => {
  const { dispatch } = useTodosContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {

    if (!user) {
      return
    }
    
    const response = await fetch('/api/todos/' + todo._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
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
      <p>{formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}</p>
      <button onClick={handleDelete} className='bg-red-400'>Delete</button>
      <Link to={`/edit/${todo._id}`}>
        <button >EDIT</button>
      </Link>
    </div>
  );
}

export default Todo;