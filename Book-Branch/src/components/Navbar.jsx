import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  // log out function
const Logout = () => {
  window.localStorage.removeItem("isLoggedIn");
  navigate("/login");
}
    return (
    <section className="navBar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/browse">Browse Books</Link>
        </div>
        <div>
        <Link to="/search">Search</Link>
      </div>
      <div>
        <Link to="/login">Sign in</Link>
      </div>
        <div>
        <Link to="/register">Register</Link>
      </div>
        <div>
        <button className="logoutButton" onClick={Logout}>Log out</button>
      </div>
    </section>
    )
}

export default Navbar