import React from "react";
import Flat from "../images/learing.jpeg";

const LastClassView = ({ inclasses }) => {
  return (
    <div className="w-1/2 mt-20 mr-2">
      {inclasses ? (
        <div className="rounded-md card mt-10 h-62 ml-36">
          <h3 className=" text-2xl font-medium  text-left tracking-wide ml-1 px-4 py-4">
            Continue learning
          </h3>
          <div className="flex items-center justify-between">
            <p className="ml-5 text-gray-500 text-sm">Lesson 5 Flat Designs</p>
            <p className="text-gray-500 text-sm mr-5">75% Done</p>
          </div>
          <img className="w-25 h-32 px-3 pb-3" src={Flat} alt="" />
          <div className="flex items-center justify-between mr-5 ">
            <button className="bg-blue-500 px-3 rounded-md font-medium text-white mb-4 mt-2  p-1 ml-2">
              Notes
            </button>
            <button className="bg-blue-500 px-3 rounded-md font-medium text-white mb-4 p-1 mt-2">
              Resume
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-md card h-[208px] ml-36 flex flex-col items-center">
          <h1 className="text-2xl font-medium text-center mt-10">
            Join a class
          </h1>
          <button className="bg-blue-500 px-3 rounded-md font-medium text-white mb-4 mt-5  p-1 ml-2">
            Explore
          </button>
        </div>
      )}
    </div>
  );
};

export default LastClassView;
