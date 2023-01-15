import { IMG_CDN_URL } from "../../configs/config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  totalRatings,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p className="cuisines-para">{cuisines.join(",")}</p>
      <p className="rating-time-cost">
        <span>
          <span className={avgRating >= 4 ? "green-rating" : "orange-rating"}>
            {avgRating}
          </span>
          (<span className="total-ratings">{totalRatings}</span>)
        </span>
        |<span>{deliveryTime} mins</span>|<span>{costForTwoString}</span>
      </p>
      <hr></hr>
    </div>
  );
};

export default RestaurantCard;

/**
 * const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RestaurantList[1].data?.cloudinaryImageId}`}
      />
      <h2>{props.restaurant.data?.name}</h2>
      <p>{props.restaurant.data?.cuisines.join(",")}</p>
      <p>
        {props.restaurant.data?.avgRating} (
        {props.restaurant.data?.totalRatings})
      </p>
    </div>
  );
};

 */

// props --> properties passed from parent to child --> normal JS object
//props.restaurant can be destructured like {restaurant}

// no key (not acceptable)  << index key (okay way) <<<< unique key (best practice)

// It is adviced not to use the index of an item as its key when they render a list. Because in case of sorting or some other thing
// index can change and it can show wrong data in UI, or can even break our app.
