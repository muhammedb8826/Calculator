import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Math Magicians
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}
