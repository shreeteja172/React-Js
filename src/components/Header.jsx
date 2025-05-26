const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;