import { useState } from "react";

const Header = () => {

  const [btnName,setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/logo.png" alt="Food App design" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
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