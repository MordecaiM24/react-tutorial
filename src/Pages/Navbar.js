import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/"> Main </Link>
      <Link to="/personal"> Personal </Link>
      <Link to="/friends"> Friends </Link>
      <Link to="/info"> Info </Link>
    </div>
  );
}

export default Navbar;