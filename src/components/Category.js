import React from "react";
import ProductsPage from "./ProductsPage";
import { Link } from "react-router-dom";

const Category = ({ info, data }) => {
  // console.log(info);

  const { idCategory, strCategory, strCategoryThumb } = data;

  // console.log(idCategory);
  // console.log(strCategory);
  // console.log(strCategoryThumb);

  return (
    <>
      <div className="mx-6">
        <Link to="/product">
          <div className="text-center">
            <div className="w-32 h-50 mt-10 flex  text-center bg-gray-200 px-1  rounded-full cursor-pointer">
              <img
                className="h-24 w-full rounded-full"
                src={strCategoryThumb}
                alt="Dessert"
              />
            </div>
            <h1 className="text-lg font-semibold">{strCategory}</h1>
          </div>
        </Link>
      </div>
    </>
  );
};
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1dSY5QZ_tKbuNj8aP-jbV4MRqijM4iUEQg&usqp=CAU

export default Category;
