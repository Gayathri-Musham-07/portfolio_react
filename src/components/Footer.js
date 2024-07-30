import "./FooterStyles.css";
import React from 'react';
import { FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+ 91   9390984487</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />mushamgayathridevi@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
          <a href="mailto:mushamgayathridevi@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaMailBulk size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/musham-gayathri-devi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/Gayathri-Musham-07" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
