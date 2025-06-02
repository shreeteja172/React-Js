import { useState } from "react";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName,setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/logo.png" alt="Food App design" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">
          Home
          </Link> </li>
          <li> <Link to="/contact">Contact</Link></li>
          <li><Link to="/About"> About Us </Link></li>
          <li>View Cart</li>
        </ul>
        <button className="login-btn" onClick={()=>{
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
        }}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;