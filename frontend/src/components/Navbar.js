import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">ToDo List</Link>
      <Link to="/login">Log in</Link>
      <Link to="/signup"> Sign up</Link>
    </div>
  );
}

export default Navbar;