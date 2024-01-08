import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ashurk18022022/", "_blank");
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>E-MART</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container" onClick={handleInstagramClick}>
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icon-container">
          <img src={pintrest_icon} alt="Pinterest" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights Reserved by Ashutosh Sarkar </p>
      </div>
    </div>
  );
};

export default Footer;
