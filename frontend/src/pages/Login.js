import { useState } from 'react'
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}> Log in </button>
      {error && <div>error</div>}

    </form>
  );
}

export default Login;