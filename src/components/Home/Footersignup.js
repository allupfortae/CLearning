import React from "react";

const Footersignup = () => {
  return (
    <div className="mt-20 p-4 bg-black text-white card2 flex items-center justify-between">
      <h1 className="w-[700px] text-sm ml-8">
        All memberships will be billed automatically on a recurring basis until
        cancelled. If eligible for a free trial, cancel before the trial ends to
        avoid being charged. Offer only valid for new paid subscribers. See full
        terms of service
        <span className="text-blue-700 cursor-pointer"> here</span>.
      </h1>
      <p className="text-sm">&copy; Central, Inc. 2022</p>
    </div>
  );
};

export default Footersignup;
