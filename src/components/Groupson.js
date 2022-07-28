import React from "react";

const Groupson = (props) => {
  const groupobj = [
    {
      id: 0,
      groupname: "ehtical",
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col p-2">
          <span className=" w-10 rounded-full text-center  text-white px-3 py-2  text-lg font-bold bg-blue-500  ">
            {props.fName}
            {props.fsName}
          </span>
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
