import React from "react";

const SignInPage = () => {
  return (
    <>
      <div className="m-10">
        <div className="bg-orange-400 flex flex-col w-1/3 h-1/2 justify-center items-center">
          <h1>Sign In</h1>
          <div className="flex flex-col bg-green-400">
            <input type="text" placeholder="Email" className="w-full" />
            <input type="text" placeholder="password" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
