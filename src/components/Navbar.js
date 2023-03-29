import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="site-title">
        Math Magicians
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}
