import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import SignIn from '../SignIn';
import '../css/Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is an item in local storage
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignOut = () => {
    // Clear the item from local storage and perform sign out logic
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/SignIn');
  };

  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter innerWidth h-container">
          {/* Logo and explore link */}
          <div className="flexCenter">
            <img src={Logo} alt="logo" width={20} />
            <div className="h-menue">
              <a href="/" className="link-color">
                Explore Saudi Arabia
              </a>
            </div>
          </div>
          {/* Header Menu Start */}
          <div className="flexCenter h-menue">
            {isLoggedIn ? (
              <button className="button" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/SignIn">
                  <button className="btn-signin">Sign In</button>
                </Link>
                <Link to="/SignUp">
                  <button className="button">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;