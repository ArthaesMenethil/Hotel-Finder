import React from "react";
import "./Header.css";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <h1>Hotel Finder</h1>
      <button
        className={`dark-mode-toggle ${darkMode ? "active" : ""}`}
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;