import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Header.css";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <h1>Hotel Finder</h1>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? (
          <FaSun className="icon sun" />
        ) : (
          <FaMoon className="icon moon" />
        )}
      </button>
    </header>
  );
};

export default Header;
