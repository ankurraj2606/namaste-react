import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hi Ankur</h1>;

const myNumber = 10;

const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React Functional Components</h1>
      <h2>Hi All</h2>

      {/* Calling Functional components */}
      <Content />

      {/* Calling React Elelment */}
      {heading}

      {/* Calling Functional components */}
      {Content()}
      {myNumber}
    </div>
  );
};

const Content = function () {
  return (
    <div>
      <h1>Content</h1>
      <h2>Book</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

/**
 * If we are writing return statement in a single-line, we can skip paranthesis but paranthesis is mandatory if we are writing return
 * statement in multiple lines.
 *
 * We can skip return if we want if we are using arrow function in a functional component.
 * We can write any JS inside {} in a React Component. Like {console.log("Hi")}
 *
 * Whenever we add any JS inside JSX, JSX sanitizes it and prevents us from malicious attacks.
 *
 * <Component /> --> Component composition. It is simply using components inside another components, passing components inside components.
 *
 * ? React.Fragment
 *
 * React.Fragment is a component exported by React.
 * It is used to avoid un-necessary divs.
 * React JSX can only have one parent.
 * React.Fragment is like an empty tag. In short <React.Fragment> Hi </React.Fragment> --> <> Hi </>
 *
 *
 * ? Props :
 *
 * <RestaurantCard restaurant={RestaurantList[0]} />
 *
 * Here "restaurant={RestaurantList[0]}" is called props. Passing props means passing some data or properties inside my child component
 * from the parent component.
 * 
 * props.restaurant can be destructured like {restaurant}
 * 
 * ! Examples below
 * 
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

const RestaurantCard = ({restaurant}) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${RestaurantList[1].data?.cloudinaryImageId}`}
      />
      <h2>{restaurant.data?.name}</h2>
      <p>{restaurant.data?.cuisines.join(",")}</p>
      <p>
        {restaurant.data?.avgRating} (
        {restaurant.data?.totalRatings})
      </p>
    </div>
  );
};
 *
 */

/**
 * ! map is the best way to run loops in functional programming
 *
 * ? virtual DOM (vDOM)
 *
 *  vDOM is not only in react , it is Software eng. concept.
 *  Representation of our real DOM is virtual DOM.
 *  Helps in reconsiliation in React.
 *  Tree-like representaion of DOM
 *
 * ? Reconciliation :
 *  It is an algorithm used by React to find the difference between the dom trees(diffing algorithm). (Real DOM and vDOM)
 *
 *  The algorithm React uses to diff one tree with another to determine which parts need to be changed.
 *
 *  The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and
 *  synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
 *
 * ? React Fiber :
 *
 *  Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
 *
 *  The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature
 *  is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
 *  Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign
 *  priority to different types of updates; and new concurrency primitives.
 * 
 *  React diff algorithms is written in React core library.
 *  DOM manipulation and DOM updates happens through React DOM library.
 *  React Native also uses the same diff algorithm.
 *
 *
 * ? File imports and exports :
 *
 *  ! default imports
 *
 *  If we are exporting a component like this : " export default Header " ----> we can import simply like :
 *  import Header from "./src/Header";
 *
 *  ! named imports
 *
 *  But if we are not using default, like " export const Header = () => {return <div>Hi</div>} " or export Header; , then we need to
 *  import like this : import {Header} from "./src/Header"
 *
 * ! while exporting a component by default import , we can rename the file while importing but it is not possible in named imports.
 *   Eg. " export default Header  " can be imported as " import HeaderCOmponent from "./src/Header ";
 *
 */
