import React from "react";

const PlansCards = () => {
  return (
    <div className="mt-10 flex flex-col gap-20  ml-10 container ">
      <div className="mt-10 border border-black h-{240px}">
        <h1 className="font-semibold text-lg ">Basic Plan</h1>
      </div>
      <div className="h-{240px} border border-blue-700">
        <h1 className="font-semibold text-lg">Standard Plan</h1>
      </div>
      <div className="h-{240px} border border-black">
        <h1 className="font-semibold text-lg">Premium Plan</h1>
      </div>
    </div>
  );
};

export default PlansCards;
