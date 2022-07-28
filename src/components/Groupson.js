import React from "react";

const Groupson = (props) => {
  return (
    <>
      <div>
        <div className="flex  items-center p-2">
          {props.hoster ? (
            <span className="w-10 rounded-full text-center text-black px-3 py-2 text-lg font-bold bg-gray-300">
              +
            </span>
          ) : (
            <div className=" w-10 rounded-full text-center  text-white px-3 py-2  text-lg font-bold bg-blue-500  ">
              {props.fName}
              {props.fsName}
            </div>
          )}
        </div>

        {props.status ? (
          <p className=" text-green-600 text-sm text-center ">Online</p>
        ) : (
          <p className=" text-red-600 text-sm text-center ">Offline</p>
        )}
      </div>
    </>
  );
};

export default Groupson;
