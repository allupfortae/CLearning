import React from "react";

const LastClassView = (props) => {
  return (
    <div className="w-1/2 mt-20 mr-2">
      {props.inClasses ? (
        <div className="rounded-md card mt-10 h-[300px] ml-36">
          <h3 className=" text-2xl font-medium  text-center tracking-wide ml-1 px-4 py-4">
            Continue with this problem
          </h3>
          <div className="flex items-center justify-between">
            <p className="ml-5 text-gray-500 text-base">Python basic: P1</p>
            <p className="text-gray-500 text-base mr-5">40% Done</p>
          </div>

          <p className="ml-5 mt-5">
            How to loop throught a array and ouput the first and last name in
            the array
          </p>
          <div className="flex items-center justify-center mr-5  mt-10 ">
            <button className="bg-blue-500 px-3 rounded-md font-medium text-white mb-4 p-1 mt-2 text-center">
              Resume
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-md card h-[208px] ml-36 flex flex-col items-center">
          <h1 className="text-2xl font-medium text-center mt-10">
            Find an problem to solve
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
