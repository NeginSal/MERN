import { useState, useEffect } from 'react'
import Todo from "../components/Todo"


const Home = () => {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();

    if (response.ok) {
      setTodos(data)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      {todos && todos.map((todo) =>
        <Todo key={todo._id} todo={todo} />
      )}
    </>
  );
}

export default Home;