import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './data.js';

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

const RestaurantCard = ({ title, cuisines, photo, price, deliveryTime }) => {
  return (
    <div className="res-card">
      <img className="card-img" src={photo} alt={title} />
      <h3>{title}</h3>
      <p>{cuisines}</p>
      <h4>Price: ₹{price}</h4> 
      <h4>Delivery Time: {deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search restaurants or Foods" />
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}b
            title={restaurant.title}
            cuisines={restaurant.cuisines}
            photo={restaurant.photo}
            price={restaurant.price} 
            deliveryTime={restaurant.deliveryTime} 
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);