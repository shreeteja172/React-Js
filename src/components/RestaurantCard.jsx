const RestaurantCard = ({ title, cuisines, photo, price, deliveryTime, category }) => {
  return (
    <div className="res-card">
      <img className="card-img" src={photo} />
      <h3>{title}</h3>
      <p>{cuisines}</p>
      <h4>Price: ₹{price}</h4>
      <h4>Delivery Time: {deliveryTime}</h4>
        {category == "Veg" ? (
          <div>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoD0qDX71-VNZ40ujnq2m290VG6uauj21spw&s"
            alt="Veg"
            width={30}
          />
          </div>
        ) : (
          <div>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnsEk-9idzdD555Uxu5CVOoOxi6QDhUT44g&s"
            alt="Non-Veg"
            width={30}
          />
          </div>
        )}
      </div>
  );
};


export default RestaurantCard;
