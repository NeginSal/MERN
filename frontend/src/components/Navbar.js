import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const logoutUser = () => {
    logout();
  };

  return (
    <div className='flex flex-row justify-between items-center border-b shadow-md shadow-slate-100 px-5 py-2 '>
      <Link to="/" className='text-5xl font-bold text-indigo-700'>ToDo List</Link>
      {!user && (
        <div>
          <Link to="/login" className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>Log in</Link>
          <Link to="/signup" className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'> Sign up</Link>
        </div>
      )}
      {user && (
        <div>
          <span className='text-xl text-indigo-500 mx-2'>{user.email}</span>
          <button onClick={logoutUser} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;