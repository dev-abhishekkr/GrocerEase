import React, { useEffect, useState } from "react";
import Category from "./Category";
import { CATEGORY_API } from "../utils/constants";
import { categories } from "../utils/helper";

const CategoryContainer = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   //get categories here
  //   getCategory();
  // }, []);

  // const getCategory = async () => {
  //   const data = await fetch(CATEGORY_API);
  //   const json = await data.json();
  //   // console.log(json.categories);
  //   // console.log(json.categories?.strCategoryDescription);
  //   setCategories(json.categories);
  // };

  return (
    <>
      <div className="my-10">
        <div className="flex flex-wrap  ">
          {categories.map((category, index) => (
            <Category key={index} data={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
