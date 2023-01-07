import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; lokeshkumarsingh001</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a target={"__blank"} href="http://instagram.com/lokeshkumarsingh001">Instagram</a>
        <a target= "__blank" href="https://www.linkedin.com/in/lokesh-kumar-singh-5606a1203/">LinkedIn</a>
        <a target= "__blank" href="http://instagram.com/lokeshanurag">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;  