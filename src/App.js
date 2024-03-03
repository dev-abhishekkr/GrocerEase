import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import CategorySlider from "./components/CategorySlider";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <div>
      <div className="fixed w-full z-10 top-0">
        <Header />
      </div>
      <div className="relative mt-20">
        <LandingPage />
      </div>
      <CategorySlider />
      <MainContainer />
    </div>
  );
};

export default App;
