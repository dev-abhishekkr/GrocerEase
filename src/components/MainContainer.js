import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS_API } from "../utils/constants";

const MainContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetch(PRODUCTS_API);
    const json = await data.json();
    // console.log(json.products);
    setProducts(json.products);
  };

  return (
    <>
      <div className="my-2">
        <div className="flex flex-col item-center text-center">
          <h1 className="text-xl font-bold">Best seller grocery near you</h1>
          <p>
            We provide best quality & fresh grocery items near your location
          </p>
        </div>

        <div className=" flex flex-wrap shadow-xl m-5 items-center justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} info={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
