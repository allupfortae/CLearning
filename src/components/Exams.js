import React from "react";
import Certifications from "./Certifications";

const Exams = () => {
  return (
    <div className="mt-12 ml-0 ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold ml-11 text-black mt-10">
          Upgrade Your Knoweldge With Certifications
        </h1>

        <a
          href="#"
          className="text-purple-700 underline text-xl font-medium mr-14 mt-10"
        >
          Certifications
        </a>
      </div>

      <div className="grid grid-cols-4  p-3">
        <Certifications />
        <Certifications />
        <Certifications />
        <Certifications />
      </div>
    </div>
  );
};

export default Exams;
