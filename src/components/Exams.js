import React from "react";
import Certifications from "./Certifications";

const Exams = () => {
  return (
    <div className="mt-12 ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold ml-11 text-black mt-10">
          Python Problems since you enjoy pyhton
        </h1>
      </div>

      <div className="grid grid-cols-4 p-3 ml-[100px]">
        <Certifications />
        <Certifications />
        <Certifications />
        <Certifications />
      </div>
    </div>
  );
};

export default Exams;
