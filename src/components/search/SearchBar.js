import React, { useState } from "react";

const SearchBar = (props) => {
  const { restaurants, setRestaurants } = props;
  console.log(restaurants);

  //searchText is a local state variable.
  //We can't directly modify the variable in react, we can only modify it using a function --> setSearchText

  const [searchText, setSearchText] = useState(""); //returns an array [variable-name, fn to modify the variable]

  function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <div className="search-container">
      <input
        placeholder="Search for restaurants, dishes, cuisines, ....."
        type="text"
        className="search-input"
        value={searchText}
        onChange={(e) => {
          //e.target.value --> whatever we are writing in input field.
          setSearchText(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          // need to filter the data and update the state --- restaurants
          const data = filterData(searchText, restaurants);
          //update the states ---> restaurants
          setRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
