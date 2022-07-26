import React, { useState, useEffect } from "react";
import bookdatas from "./Data/BookData";
import Books from "./Books";

const FeaturedBooks = (props) => {
  return (
    <div className="flex flex-col gap-2 ml-5 mt-8">
      <img
        className="booksImg ml-3 cursor-pointer"
        key={props.id}
        src={props.img}
      />

      <p className="font-bold w-56 text-sm text-center">{props.desc}</p>
      <div className="flex gap-4 font-medium items-center">
        <a href="#">
          <span className="text-black underline-none">By </span>
          <span className="text-purple-700 underline w-14">{props.auth}</span>
        </a>
        <p className="">{props.ratings}</p>
      </div>
    </div>
  );
};
export default FeaturedBooks;
