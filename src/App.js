import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Body } from "./components/body/Body";
import About from "./components/about/About";
import Error from "./components/error/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/contact/ContactUs";
import RestaurantMenu from "./components/restaurantMenu/RestaurantMenu";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // Path should be about and not "/about"
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
