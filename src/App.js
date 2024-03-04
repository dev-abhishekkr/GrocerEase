import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import CategoryContainer from "./components/CategoryContainer";
import ProductsPage from "./components/ProductsPage";
import SignInPage from "./components/SignInPage";

const App = () => {
  return (
    <div>
      <div className="fixed w-full z-10 top-0">
        <Header />
      </div>
      <div className="mt-20">
        <LandingPage />
      </div>
      <CategoryContainer />
      <MainContainer />
      <Footer />
    </div>
  );
};
export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <ProductsPage />,
  },
  {
    path: "/sign-up",
    element: <SignInPage />,
  },
]);

export default App;
// root.render(<RouterProvider router={appRoute} />);
