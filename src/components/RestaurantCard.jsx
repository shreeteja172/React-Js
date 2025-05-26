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

export default RestaurantCard;