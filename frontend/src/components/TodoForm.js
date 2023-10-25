import { useState } from 'react'
import { useTodosContext } from '../hooks/useTodosContext'
import { useAuthContext } from '../hooks/useAuthContext'

const TodoForm = () => {

  const { dispatch } = useTodosContext()
  const { user } = useAuthContext()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const todo = { title, description, number }

    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
      setEmptyFields(data.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
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
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>description</label>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <label>number</label>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className={emptyFields.includes('number') ? 'error' : ''}
      />
      <button>Add Todo</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default TodoForm;