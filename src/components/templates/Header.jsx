import React from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = ({ toggleDarkMode, darkMode, onLogoClick, searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <h1 className="logo" onClick={onLogoClick}>
        Hotel Finder
      </h1>
      
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun className="icon sun" /> : <FaMoon className="icon moon" />}
      </button>
    </header>
  );
};

export default Header;
