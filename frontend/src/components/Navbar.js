import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout()
  }
  return (
    <div>
      <Link to="/">ToDo List</Link>
      {!user && (
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/signup"> Sign up</Link>
        </div>
      )}
      {user && (
        <div>
          <span>{user.email}</span>
          <button onClick={handleClick}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;