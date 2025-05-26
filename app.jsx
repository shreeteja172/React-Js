import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body 
 *  - Search
 *  - Restaurant Container
 *    - Cards
 * Footer
 *  - Links
 *  - Copyright
 *  - Contact
 */

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="logo.png" alt="Food App design" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>View Cart</li>
        </ul>
      </div>
    </div>
  )
}
const RestaurantCard = () => {
  return (
    <div className='res-card'>
      <img className='card-img' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1c76ad24c0a126ed8414ae344d22c372" alt="Paneer-Biryani" />
      <h3>Krushna Hotel</h3>
      <h4>5 star</h4>
      <h4>35 minutes away</h4>
    </div>
  )
}
const Body = () => {
  return (
    <div className='body'>
      <div className="search">
        <input type="text" name="" id="" />
      </div>
      
      <div className='res-container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (<div className='app'>
    <Header/>
    <Body/>
  </div>);
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)