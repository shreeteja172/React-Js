import restaurantsData from "../utils/mockData"; 
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = restaurantsData.filter((res) => res.rating > 4);
            setRestaurants(filtered);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            title={restaurant.title}
            cuisines={restaurant.cuisines}
            photo={restaurant.photo}
            price={restaurant.price}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
