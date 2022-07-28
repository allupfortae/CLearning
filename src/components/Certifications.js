import React from "react";
import PythonProblem from "../images/pyhtonproblem.webp";

function Certifications() {
  return (
    <div className="mt-6  ">
      <img className="Certifications " src={PythonProblem} />
      <p className="mt-3">By John Smith</p>

      <p className="w-[200px] text-left mt-2">
        aliquet nibh praesent tristique magna sit amet purus gravida quis
        blandit turpis cursus in hac habitasse platea dictumst pyhton...
      </p>
    </div>
  );
}

export default Certifications;
