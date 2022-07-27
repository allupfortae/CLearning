import React from "react";
import GroupOnlie from "./GroupOnlie";

const Features = ({ firstletter }) => {
  return (
    <div>
      <div className="card2 mt-7 h-10 ">
        <ul className="flex items-center justify-evenly pb-4 pt-2 text-gray-500 text-sm cursor-pointer">
          <li>Development</li>
          <li>Science</li>
          <li>Math</li>
          <li>Cybersecurity</li>
          <li>History</li>
          <li>IT</li>
          <li>Software</li>
          <li>Design</li>
          <li>Business</li>
          <li>Marketing</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
