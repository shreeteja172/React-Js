import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

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

export default Body;