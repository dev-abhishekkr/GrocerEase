import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex  justify-between items-center p-3 bg-white shadow-md ">
        <div className="flex items-center">
          <img
            className="h-14"
            src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=sph"
            alt="app-logo"
          />
          <h1 className="text-xl text-orange-500 font-bold">GrocerEase*</h1>
          <div className="ml-10 flex gap-7 text-lg ">
            <h1>About</h1>
            <h1>Categories</h1>
            <h1>Shops</h1>
          </div>
        </div>

        <div className="flex gap-10 mr-10 text-center">
          <div className="flex gap-1 items-center">
            <img
              className="h-10"
              src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png"
              alt="cart-icon"
            />
            <h1 className="text-lg text-orange-500 font-bold">2</h1>
          </div>
          <button className="bg-green-700 px-7 py-3 text-lg text-white rounded-full">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
