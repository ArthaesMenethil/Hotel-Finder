import React from "react";
import { FaSun, FaMoon, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = ({
  toggleDarkMode,
  darkMode,
  onLogoClick,
  searchQuery,
  setSearchQuery,
  onLoginClick,
  onCartClick,
  currentUser,
  onLogout,
}) => {
  const authButtonText = currentUser
    ? currentUser.username.charAt(0).toUpperCase()
    : "Login";
    
  const handleAuthClick = currentUser ? onLogout : onLoginClick;

  const isSmallScreen = window.innerWidth <= 768;
  const placeholderText = isSmallScreen ? "Search:" : "Search services:";

  return (
    <header className="header">
      <div className="logo-wrapper" onClick={onLogoClick}>
        <img
          src="https://sun9-59.userapi.com/impg/vPCK9Yv8wWwcWuy2ztzXFv5diZNl4LPvVi7E7w/euf6ePLiYqY.jpg?size=2048x2048&quality=95&sign=5f2d4ade9003a091069eea6c5551d5dd&type=album"
          alt="Logo"
          className="logo-image"
        />
        <h1 className="logo">Hotel Finder</h1>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="header-actions">
        <button 
          className={currentUser ? "auth-button user-initials" : "auth-button"} 
          onClick={handleAuthClick}
          title={currentUser ? `Logout (${currentUser.username})` : "Login"}
        >
          {authButtonText}
        </button>
        
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="icon sun" /> : <FaMoon className="icon moon" />}
        </button>
        <button className="cart-button" onClick={onCartClick}>
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default Header;