import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div>
      <menu>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse">Browse Books</Link>
        </li>
        <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
        </ul>
      </menu>
    </div>
    )
}

export default Navbar