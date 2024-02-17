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
        <div className="navLink">
          <Link to="/">Home</Link>
        </div>
        <div className="navLink">
          <Link to="/browse">Browse Books</Link>
        </div>
        <div className="navLink">
        <Link to="/search">Search</Link>
      </div>
      <div className="navLink">
        <Link to="/login">Sign in</Link>
      </div>
        <div className="navLink">
        <Link to="/register">Register</Link>
      </div>
        <div className="navLink">
        <button className="logoutButton" onClick={Logout}>Log out</button>
      </div>
    </section>
    )
}

export default Navbar