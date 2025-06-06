import restaurantsData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantsData);

  const handleSearch = () => {
    const filtered = restaurantsData.filter((res) =>
      res.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleTopRated = () => {
    const filtered = restaurantsData.filter((res) => res.rating > 4);
    setFilteredRestaurant(filtered);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        {/* <button className="filter-btn" onClick={handleTopRated}>
          Top Rated
        </button> */}
      </div>

      {/* <button onClick={()=>{
        // settemp(!temp)
        const retrieveddata  = restaurantsData.filter((data)=> (
          data.price > 500
        ))
        setFilteredRestaurant(retrieveddata)
      }}>Over 500$</button> */}
      
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link to='/restaurants/'
            key={restaurant.id}>
          <RestaurantCard
            id={restaurant.id}
            title={restaurant.title}
            cuisines={restaurant.cuisines}
            photo={restaurant.photo}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            category={restaurant.category}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

