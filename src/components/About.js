import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Header />
      <div>
        <h1>
          Welcome to{" "}
          <span className="text-orange-600 font-bold">GrocerEase*</span>{" "}
          GrocerEase*, where convenience meets quality in the world of online
          grocery shopping. We're more than just a grocery store; we're your
          trusted partner in providing fresh, high-quality products delivered
          straight to your doorstep.
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default About;
