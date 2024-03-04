import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOpps</h1>
      <h1>Page Not Found - routing error(404)</h1>
      <h1>{err.status + ": " + err.statusText}</h1>
    </div>
  );
};

export default Error;
