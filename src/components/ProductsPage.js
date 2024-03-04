import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { categories } from "../utils/helper";
import Category from "./Category";
// import { BREAKFAST_API } from "../utils/constants";

const ProductsPage = () => {
  //   useEffect(() => {
  //     getBreakFast();
  //   }, []);

  //   const getBreakFast = async () => {
  //     const data = await fetch(BREAKFAST_API);
  //     const json = data.json();
  //     console.log(json);
  //   };

  return (
    <>
      <Header />
      <div>
        <div className="flex flex-wrap">
          {categories.map((category, index) => (
            <Category key={index} data={category} />
          ))}
        </div>
        <div>Filteration lists</div>
        <div>
          <div>Product cards lists display</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
