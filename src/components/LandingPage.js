import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <img
            className="h-44"
            src="https://miro.medium.com/v2/resize:fit:512/1*KoExa8scmI7xLl669dHNBQ.jpeg"
            alt="Landing-img"
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
