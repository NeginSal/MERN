import { useEffect } from 'react'

// components
import Todo from "../components/Todo"
import TodoForm from '../components/TodoForm';
import { useTodosContext } from '../hooks/useTodosContext'
import { useAuthContext } from '../hooks/useAuthContext'


const Home = () => {

  const { todos, dispatch } = useTodosContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('/api/todos', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TODOS', payload: data })
      }
    }

    if (user) {
      fetchTodos()
    }

  }, [dispatch, user])

  return (
    <div>
      <div className='bg-lime-300 border border-green-900'>
        {todos && todos.map((todo) =>
          <Todo todo={todo} key={todo._id} />
        )}
      </div>
      <TodoForm />
    </div>
  );
}

export default Home;