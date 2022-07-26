import React from "react";
import Certifications from "../../images/awscertifications.png";
import Linkedin from "../../images/LinkedIn.jpg";

const HomeList = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center">
        <img src={Certifications} />
        <div className="flex flex-col ml-7 items-center">
          <p className=" font-semibold text-2xl">Get an Certifications</p>
          <p className="w-[340px] mt-3 tracking-wide text-center">
            Get access to certifications with your central plan. Certifications
            provides better opportunity and can help you know what you need to
            practice on
          </p>
          <button className="hover:bg-black text-white bg-black px-4 py-3 mt-3 ">
            Explore certifications
          </button>
        </div>
      </div>
      <div className="mt-20 bg-[#F7F9FA] h-[140px] flex items-center justify-center p-4">
        <h1 className="text-2xl font-semibold tracking-wide">
          Trusted by big and small tech companies and colleges
        </h1>
      </div>

      {/* Second */}
      <div className="flex flex-row-reverse items-center justify-center mt-20">
        <img src={Linkedin} />
        <div className="flex mr-7 flex-col items-center">
          <p className=" font-semibold text-2xl">Publish your Books</p>
          <p className="w-[340px] mt-3 tracking-wide text-center">
            On central we have a online libary to pick from any educational
            books you'll like to read while you are learning or trying a new
            career. Publishing your book in the libary will help others will
            they learn
          </p>
          <button className="hover:bg-black text-white bg-black px-4 py-3 mt-3 ">
            Publish Your Book
          </button>
        </div>
      </div>
      {/* Third */}
      <div className="flex items-center justify-center mt-40">
        <img src={Certifications} />
        <div className="flex ml-7 flex-col items-center">
          <p className=" font-semibold text-2xl">Real life Expirement</p>
          <p className="w-[340px] mt-3 tracking-wide text-center">
            Our goal is to give people the real life expirement on any classes
            you take no matter the category. With groups you can expirement the
            full opportunity of the real life expirement
          </p>
          <button className="hover:bg-black text-white bg-black px-4 py-3 mt-3 ">
            Explore Groups
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeList;
