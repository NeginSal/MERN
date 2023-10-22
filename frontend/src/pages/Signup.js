import { useState } from 'react'
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { error, isloading, signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isloading}> Sign up </button>
      {error && <div>{error}</div>}

    </form>
  );
}

export default Signup;