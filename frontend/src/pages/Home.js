import { useState, useEffect } from 'react'


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
        <div key={todo._id}>
          <p>title - {todo.title}</p>
          <p>description - {todo.description}</p>
          <p>number - {todo.number}</p>
        </div>
      )}
    </>
  );
}

export default Home;