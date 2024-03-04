import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex  justify-between items-center p-3 bg-white shadow-md h-20 ">
        <div className="flex items-center">
          <img
            className="h-14"
            src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=sph"
            alt="app-logo"
          />
          <h1 className="text-xl text-orange-500 font-bold">GrocerEase*</h1>
          <ul className="ml-10 flex gap-7 text-lg ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/product">
              <li>Product</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>

        <div className="m-0">
          <input
            className="bg-gray-300 w-96 px-7 py-4  rounded-full focus:outline-none  focus:bg-green-100"
            type="text"
            placeholder="Search for veggies, chocolates and more..."
          />
        </div>

        <div className="flex gap-4 mr-5">
          <div className="flex gap-2 text-center items-center bg-orange-500 px-2 rounded-full">
            <img
              className="h-10"
              src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png"
              alt="cart-icon"
            />
            <h1 className="text-white font-bold">2</h1>
          </div>
          <Link to="/Sign-up">
            <button className="px-7 py-2 bg-green-700 text-white text-lg rounded-full">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
