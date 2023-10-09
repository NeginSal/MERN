import { useState } from 'react'
import { useTodosContext } from '../hooks/useTodosContext'

const TodoForm = () => {

  const { dispatch } = useTodosContext()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState(null)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const todo = { title, description, number }

    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
    }
    if (response.ok) {
      setTitle('')
      setDescription('')
      setNumber('')
      setError(null)
      dispatch({ type: 'CREATE_TODO', payload: data })
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Add a new Todo</h3>
      <label>title</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>description</label>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>number</label>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button>Add Todo</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default TodoForm;