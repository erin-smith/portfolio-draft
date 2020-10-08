import React from "react";
import "./style.css";

function Footer() {

    return (
        <footer className="footer">
      <div className="footer-right">
        <div className="footer-icons">
          <a href="https://github.com/erin-smith" target="_blank" rel="noopener noreferrer" alt="Github" height="50px"><i
              className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/erin-s-3a596677/" target="_blank" rel="noopener noreferrer" alt="LinkedIn" height="50px"><i
              className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/miss_sparkle_plenty/" target="_blank" rel="noopener noreferrer" alt="Instagram" height="50px"><i
              className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
       );
     }

     export default Footer;