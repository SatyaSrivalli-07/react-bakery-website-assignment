import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-left">
        <Link to="/">BAKERY</Link>

        <div className="pages-dropdown">
          <span onClick={() => setMenuOpen(!menuOpen)}>
            PAGES ▼
          </span>

          {menuOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>

              <li>
                <Link to="/landing">LANDING</Link>
              </li>

              <li>
                <Link to="/ourbread">BAKERY TEAM</Link>
              </li>

              <li>
                <Link to="/contact">WORKSHOPS PAGE</Link>
              </li>
            </ul>
          )}
        </div>

        <Link to="/ourbread">OUR BREAD</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="nav-center">
        <h2>BAKERY</h2>
      </div>

      <div className="nav-right">
        <span>🔍</span>
        <span>🛒</span>
      </div>

    </nav>
  );
}

export default Navbar;