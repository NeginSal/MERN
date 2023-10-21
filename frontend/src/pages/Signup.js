import { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
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
      <button> Sign up </button>

    </form>
  );
}

export default Signup;