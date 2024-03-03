import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-16 pt-20 pb-32 bg-gray-200">
        <div className="w-full text-center">
          <input
            className="bg-white w-1/2 px-7 py-5 rounded-full text-xl focus:outline-none focus:bg-gray-50"
            type="text"
            placeholder="Search veggies, ice-creams and more"
          />
        </div>
        <div className="flex flex-col gap-5 items-center px-5">
          <h1 className="text-3xl font-bold text-green-800">
            Bringing the market to you – where convenience meets quality
          </h1>
          <h1 className="text-center">
            We source and sell the very best veggies and other kitchen products{" "}
            <br></br>
            sourced with the greatest care from farmer.
          </h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
