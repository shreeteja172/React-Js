import { useParams } from "react-router-dom";
import restaurantsData from "../utils/mockData"; 

const RestaurantMenu = () => {
  const { id } = useParams();
  
  const restaurant = restaurantsData.find(
    restaurant => restaurant.id === Number(id)
  );
  
  if (!restaurant) {
    return <div>Restaurant not found!</div>;
  }
  
  const menu = restaurant.menu || [];

  return (
    <div>
      <h1>{restaurant.title} Menu</h1>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} - ₹{item.price} - {item.rating}Stars - {item.category} - Offer: {item.offer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
