import React, { useState, useEffect } from "react";
import Java from "../images/Java1.jpg";
import Math from "../images/math.webp";
import { getBooksdata } from "../api";

const FeaturedBooks = () => {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    getBooksdata().then((data) => {
      console.log(data);
      setListing(data);
    });
  }, []);

  return (
    <div className="flex flex-col gap-2 ml-5 mt-8">
      <img className="booksImg ml-3" src={Math} alt="Javabook" />
      <p className="font-bold w-52 text-sm text-center">
        Learn JavaScript Quickly: A Beginner Guide Hands On Expirement
      </p>
      <div className="flex gap-3 font-medium items-center">
        <a href="#">
          <span className="text-black underline-none">By </span>
          <span className="text-purple-700 underline">Code Quickly</span>
        </a>
        <p className="">500 ratings</p>
      </div>
    </div>
  );
};

export default FeaturedBooks;
