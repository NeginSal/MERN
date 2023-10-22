import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout()
  }
  return (
    <div>
      <Link to="/">ToDo List</Link>
      <div>
        <Link to="/login">Log in</Link>
        <Link to="/signup"> Sign up</Link>
      </div>
      <div>
        <button onClick={handleClick}>Log Out</button>
      </div>
    </div>
  );
}

export default Navbar;