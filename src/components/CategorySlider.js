import React from "react";

const CategorySlider = () => {
  return (
    <>
      <div className="w-full mb-10 px-5 relative ">
        <div className=" flex gap-3 relative bottom-4 ">
          <div className="w-1/3 h-32 bg-green-200 flex">
            <img
              className="h-full w-1/3"
              src="https://www.myfamilyfirstchiro.com/wp-content/uploads/2016/06/Fresh-Vegetables.jpg"
              alt="categories"
            />
            <div className="flex flex-col justify-center px-3">
              <h1 className="text-lg font-semibold">
                Your Pet Choices for fresh healthy food
              </h1>
              <p className="pt-2">Get your supplies now</p>
            </div>
          </div>
          <div className="w-1/3 h-32 bg-blue-200 flex">
            <img
              className="h-full w-1/3"
              src="https://www.bigbasket.com/media/uploads/groot/images/982022-f4236f71-safewash_woolen-banner-2.jpg"
              alt="categories"
            />
            <div className="flex flex-col justify-center px-3">
              <h1 className="text-lg font-semibold">
                Washing items with discount products
              </h1>
              <p className="pt-2">Get your supplies now</p>
            </div>
          </div>
          <div className="w-1/3 h-32 bg-orange-200 flex">
            <img
              className="h-full w-1/3"
              src="https://m.media-amazon.com/images/I/614mDB5NhRL._AC_UF1000,1000_QL80_.jpg"
              alt="categories"
            />
            <div className="flex flex-col justify-center px-3">
              <h1 className="text-lg font-semibold">
                Spring cleaning for home appliances
              </h1>
              <p className="pt-2">Get your supplies now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
