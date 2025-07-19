import { NavLink } from 'react-router';

function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'hover:text-blue-600';

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">React-Router</div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="about" className={linkClass}>About</NavLink>
        <NavLink to="charges" className={linkClass}>Charges</NavLink>
        <NavLink to="contact" className={linkClass}>Contact</NavLink>
        <NavLink to="user" className={linkClass}>Params</NavLink>
      </nav>

      {/* Login Button */}
      <div>
        <NavLink to="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
