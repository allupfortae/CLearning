import React from "react";

const ExplorePlans = () => {
  return (
    <div className="mt-20 ">
      <h2 className="ml-14 text-3xl font-semibold mb-3">Explore Our Plan</h2>
      <div className="card2 w-{100%} mr-5 ml-14 mt-3 p-3  h-{200px} rounded-sm">
        <p className="text-xl font-bold p-0 mb-1">Central Plan</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm font-light pb-2">
            It's like having an tutor and teacher at the same time, while being
            anything where.
          </p>
          <a href="#" className="text-purple-700 underline ">
            Check Plans
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExplorePlans;
