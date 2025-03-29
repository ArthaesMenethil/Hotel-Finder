import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Hotel Finder. Все права защищены.</p>
        <nav>
          <a href="/privacy">Конфиденциальность</a>
          <a href="/terms">Условия</a>
        </nav>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-vk"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
