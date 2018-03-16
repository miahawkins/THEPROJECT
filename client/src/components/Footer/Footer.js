import React from "react";
// import "./Footer.css";
import Navigation from "../Navigation";
import SignOut from "../SignOut";

const Footer = () =>
  <div className= "footer">
    <div id="ftr">
    <Navigation />
    <SignOut />
    <br/><br/>
    <p>Kat Allen | Mia Hawkins - 2018</p>
    </div>
  </div>;

export default Footer;
