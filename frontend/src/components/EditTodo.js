import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

//components
import { useTodosContext } from '../hooks/useTodosContext'

const EditTdo = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { todo, dispatch } = useTodosContext()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [number, setNumber] = useState('')


  useEffect(() => {
    const fetchTodo = async () => {

      const response = await fetch('/api/todos/' + id)
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TODO', payload: data })
        setTitle(data.title || "")
        setDescription(data.description || "")
        setNumber(data.number || "")
      }
    }
    fetchTodo()

  }, [todo, dispatch, id])

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const updatedTodo = {
      // ...todo,
      title,
      description,
      number
    }

    const response = await fetch('/api/todos/' + id, {
      method: 'PATCH',
      body: JSON.stringify(updatedTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    if (response.ok) {
      dispatch({ type: 'EDIT_TODO', payload: data })
      navigate('/')
    }
  }

  const backToHome = () => {
    navigate('/')
  }
  
  return (
    <>
      <form onSubmit={handleFormSubmit}>
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

        <button>Edit</button>
        <button onClick={backToHome}>BackToHome</button>

      </form>
    </>
  );
}
export default EditTdo;


