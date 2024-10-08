import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            accusamus illum. Culpa voluptatibus quasi quam molestiae accusantium
            odit optio quas modi. Illo aspernatur porro alias, esse perspiciatis
            saepe distinctio consectetur.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-888-546-3467</li>
            <li>contact@feastfinder.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © feastfinder.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
