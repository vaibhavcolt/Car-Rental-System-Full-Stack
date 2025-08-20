import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">🚗 Drive Your Dream</div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Your Best Deals</a></li>
            <li><a href="/projects">Hotels</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="/registration" className="btn">Register</a>
            <a href="/login" className="btn">Login</a>
            <a href="/addcar" className="btn">Add Car</a>
            <a href="/cartpage" className="btn">Cart 🛒</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
