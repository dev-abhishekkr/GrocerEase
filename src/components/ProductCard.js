import React from "react";

const ProductCard = ({ info }) => {
  // console.log(info);

  return (
    <>
      <div className="bg-white shadow-xl w-1/5  hover:bg-gray-200 m-3">
        <div className="text-center h-70">
          <img className="h-full" src={info.image} alt="prod-1" />
        </div>
        <div className="">
          <h1 className="text-lg font-bold">{info.title}</h1>
          <div className="py-2 flex justify-between px-5">
            <h1 className=" text-xl font bold">$1.34</h1>
            <p className="text-gray-700">1 each</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
