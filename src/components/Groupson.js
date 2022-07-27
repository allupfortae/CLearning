import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";

const Groupson = ({ letter, data }) => {
  return (
    <>
      {data?.map((data) => {
        return (
          <div className="flex flex-col p-2 ml-8">
            <span className=" w-10 rounded-full text-center  text-white px-3 py-2  text-lg font-bold bg-blue-500  ">
              {letter}
            </span>
            <p className=" text-green-600 text-sm text-center ">Online</p>
          </div>
        );
      })}
    </>
  );
};

export default Groupson;
