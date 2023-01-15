import { useState, useEffect } from "react";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { RestaurantList } from "../../configs/config";
import SearchBar from "../search/SearchBar";
import Shimmer from "../shimmer/Shimmer";

export const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  //Conditional Rendering
  // If restaurants is empty, load shimmer UI
  // If restaurants have data, load actual data UI

  if(!filteredRestaurants) return null;

  (filteredRestaurants?.length===0) &&  <><h1>No results found</h1></>

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <SearchBar
        allrestaurants={allRestaurants}
        setAllRestaurants={setAllRestaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};
