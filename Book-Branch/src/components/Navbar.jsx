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
        </ul>
      </menu>
    </div>
    )
}

export default Navbar