// import { useEffect } from "react"
// import { useTodosContext } from "../hooks/useTodosContext"

// // components
// import Todo from "../components/Todo"
// // import WorkoutForm from "../components/WorkoutForm"

// const Home = () => {
//   const {todos, dispatch } = useTodosContext()

//   useEffect(() => {
//     const fetchTodos = async () => {
//       const response = await fetch('/api/todos')
//       const json = await response.json()

//       if (response.ok) {
//         dispatch({type: 'SET_TODO', payload: json})
//       }
//     }

//     fetchTodos()
//   }, [dispatch])

//   return (
//     <div >
//       <div>
//         {todos && todos.map(todo => (
//           <Todo todo={todo} key={todo._id} />
//         ))}
//       </div>
//       {/* <WorkoutForm /> */}
//     </div>
//   )
// }

// export default Home


import { useEffect } from 'react'
import Todo from "../components/Todo"
import TodoForm from '../components/TodoForm';
import { useTodosContext } from '../hooks/useTodosContext'


const Home = () => {

  const { todos, dispatch } = useTodosContext()

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('/api/todos');
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TODOS', payload: data })
      }
    }
    fetchTodos()
  }, [dispatch])

  return (
    <div>
      <div className='bg-lime-300 border border-green-900'>
        {todos && todos.map((todo) =>
          <Todo  todo={todo} key={todo._id}/>
        )}
      </div>
      <TodoForm />
    </div>
  );
}

export default Home;