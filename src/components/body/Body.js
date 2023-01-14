import { useState } from "react";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { RestaurantList } from "../../configs/config";
import SearchBar from "../search/SearchBar";

export const Body = () => {
  const [restaurants, setRestaurants] = useState(RestaurantList);
  return (
    <div className="body-container">
      <SearchBar restaurants={restaurants} setRestaurants={setRestaurants} />
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};
