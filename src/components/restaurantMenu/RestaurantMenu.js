import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../configs/config.js";
import Shimmer from "../shimmer/Shimmer";
import "./restaurantMenu.css";
import { FaStar } from "react-icons/fa";

const RestaurantMenu = () => {
  // How to read a dynamic URL params
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestauranrDetails();
  }, []);

  async function getRestauranrDetails() {
    const details = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" +
        id
    );
    const detailsJson = await details.json();
    setRestaurant(detailsJson.data);
    console.log(detailsJson.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      <div className="restaurant-div">
        <div className="restaurant-details-card">
          <div className="image-details">
            <div className="image">
              <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            </div>
          </div>
          <div className="restaurant-details">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.cuisines.join(",")}</p>
            <p>
              <span>{restaurant.locality}</span>, <span>{restaurant.area}</span>
            </p>
            <div className="rating-time-cost_container">
              <div className="rating">
                <p className="rating-val">
                  <span>
                    <FaStar />
                  </span>
                  {restaurant.avgRating}
                </p>
                <p className="label-para">{restaurant.totalRatingsString}</p>
              </div>
              <div className="hr-vertical"></div>
              <div className="time">
                <p className="time-val">
                  {restaurant.sla.slaString.toLowerCase()}
                </p>
                <p className="label-para">Delivery Time</p>
              </div>
              <div className="hr-vertical"></div>
              <div className="cost">
                <p className="cost-val">
                  {restaurant.costForTwoMsg.substring(0, 4)}
                </p>
                <p className="label-para">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
        <div className="offer-details-card">
          <ul>
            {restaurant?.aggregatedDiscountInfo?.descriptionList.map((item) => (
              <li key={item.meta}>{item.meta}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        {console.log(Object.values(restaurant?.menu?.items))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;