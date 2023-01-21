import { useState } from "react";
import Title from "../title/Title";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Link className="nav-links" to="/">
        <Title />
      </Link>

      <div className="nav-items">
        <ul className="list">
          <Link className="nav-links" to="/">
            <li className="list-items">Home</li>
          </Link>
          <Link className="nav-links" to="/about">
            <li className="list-items">About Us</li>
          </Link>
          <Link className="nav-links" to="/contact">
            <li className="list-items">Contact Us</li>
          </Link>
          <Link className="nav-links" to="">
            <li className="list-items">Cart</li>
          </Link>

          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="btn login-logout"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="btn login-logout"
            >
              Log In
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
