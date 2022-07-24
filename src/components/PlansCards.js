import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

const PlansCards = () => {
  return (
    <div className="mt-10 flex justify-center gap-40 items-center  ml-10 container mb-20">
      {/* Basic Plan */}
      <div className="w-1/5 border text-lg border-black h-[400px] py-4 px-3 rounded-md text-center ">
        <h1 className="font-semibold ml-4 text-center  text-xl ">
          Basic Plan&mdash;
        </h1>
        <p className="text-3xl  font-semibold mt-2 ">$10.50</p>
        <p>Month</p>

        <div className="flex flex-col gap-5 mt-3 items-center">
          <div className="flex items-center flex-col gap-4 ">
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>Joining an Group</p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>3 new books a month</p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>1 exam certification</p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>Unlimited Classes</p>
            </div>
          </div>
        </div>

        <p className="mt-5">+tax</p>
        <button className="bg-blue-700 text-white py-1 px-2 rounded-lg text-base font-light w-full mt-1">
          Subscribe
        </button>
      </div>

      {/* Standard Plan */}
      <div className="w-1/5 border-2 text-lg border-blue-700 h-[450px] py-4 rounded-md text-center px-3 relative">
        <h1 className="font-semibold ml-4 text-xl text-center">
          Standard Plan
        </h1>

        <p className="text-3xl text-center font-semibold mt-2 ">$15.75</p>
        <p className="text-center">Month</p>

        <div className="flex flex-col gap-5 mt-3 items-center">
          <div className="flex items-center flex-col gap-4 ">
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>Joining an Group</p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>5 new books a month</p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>3 exam certification</p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>Unlimited Classes</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>Create an group</p>
            </div>
          </div>
        </div>

        <p className="mt-5">+tax</p>
        <button className="bg-blue-700 text-white py-1 px-2 rounded-lg text-base font-light w-full mt-1">
          Subscribe
        </button>
        <p className="bg-blue-700 absolute text-white top-0 left-0 p-2 text-lg -translate-y-8 -translate-x-5">
          Most popular
        </p>
      </div>

      {/* Premium Plan */}
      <div className="w-1/5 border text-lg border-black h-96 py-4 rounded-md text-center px-3">
        <h1 className="font-semibold ml-4 text-xl">Premium Plan</h1>
        <p className="text-3xl text-center font-semibold mt-2 ">$25.00</p>
        <p className="text-center">Month</p>

        <div className="mt-10">
          <div className="flex items-center flex-col gap-4 justify-center mb-10">
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="text-green-600 text-2xl" />
              <p>Access to anything </p>
            </div>
          </div>
          <p>+tax</p>
          <button className="bg-blue-700 text-white py-1 px-2 rounded-lg text-base font-light w-full mt-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlansCards;
