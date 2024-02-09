import { Link } from "react-router-dom";

// log out function
const Logout = () => {
  window.localStorage.removeItem("isLoggedIn");
}

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
        <Link to="/login">Sign in</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <button onClick={() => Logout()}>Log out</button>
      </li>
        </ul>
      </menu>
    </div>
    )
}

export default Navbar