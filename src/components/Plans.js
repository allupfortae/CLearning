import React from "react";
import PlansCards from "./PlansCards";

const Plans = () => {
  return (
    <div className="mt-14 ">
      <div>
        <h1 className="text-3xl font-bold ml-14 tracking-wide">
          Subscriptions
        </h1>
        <p className="text-lg tracking-wide ml-14 mt-3 ">
          Subscribe to get the full experiment
        </p>
      </div>
      <div>
        <PlansCards />
      </div>
    </div>
  );
};

export default Plans;
