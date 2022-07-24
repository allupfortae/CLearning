import React from "react";
import { AiOutlineMinus } from "react-icons/ai";

const PlansCards = () => {
  return (
    <div className="mt-10 flex justify-center gap-40 items-center  ml-10 container mb-20">
      {/* Basic Plan */}
      <div className="w-1/5 border text-lg border-black h-96 py-4 px-3 rounded-md ">
        <h1 className="font-semibold ml-4 text-center  text-xl ">
          Basic Plan&mdash;
        </h1>
        <p>$10.50</p>
        <p>Month</p>
        <p>Joining an Group</p>
        <p>3 new books a month</p>
        <p>1 exam certification</p>
        <p>Unlimited Classes</p>
        <button>Subscribe</button>
      </div>

      {/* Standard Plan */}
      <div className="w-1/5 border-2 text-lg border-blue-700 h-96 py-4 rounded-md">
        <h1 className="font-semibold ml-4 text-xl">Standard Plan</h1>
      </div>

      {/* Premium Plan */}
      <div className="w-1/5 border text-lg border-black h-96 py-4 rounded-md">
        <h1 className="font-semibold ml-4 text-xl">Premium Plan</h1>
      </div>
    </div>
  );
};

export default PlansCards;
