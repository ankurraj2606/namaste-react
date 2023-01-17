import { useState, useEffect } from "react";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { RestaurantList } from "../../configs/config";
import SearchBar from "../search/SearchBar";
import Shimmer from "../shimmer/Shimmer";
import Sort from "../sort/Sort";
import { Link } from "react-router-dom";

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

  //Early return(Not render component)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-and-sort">
        <SearchBar
          allRestaurants={allRestaurants}
          setAllRestaurants={setAllRestaurants}
          filteredRestaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <Sort
          allRestaurants={allRestaurants}
          setAllRestaurants={setAllRestaurants}
          filteredRestaurants={filteredRestaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length === 0 ? (
          <>
            <h1 className="no-results-class">
              No results found for this search......
            </h1>
          </>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
                className="card"
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
