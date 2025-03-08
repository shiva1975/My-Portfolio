import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"; 
import './Footer.css';

const Footer = () => {
  return (
    <>
      <hr className="custom-line" />
      <div className="main">
        <h1 className="heading">Shiva Dheeraj</h1>
        
        <div className="social-icons">
          <a href="https://wa.me/7780742628" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon whatsapp" />
          </a>
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon facebook" />
          </a>
          <a href="https://www.instagram.com/cshivadheeraj/?next=%2F" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram" />
          </a>
          <a href="https://x.com/ShivaDheer44073" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon twitter" />
          </a>
        </div>
      </div>
      <div className="lastpart">
      <p className="last">copy right @2009 </p>
      <p className="lastone">||All right are reserved</p>
      </div>
    </>
  );
}

export default Footer;
