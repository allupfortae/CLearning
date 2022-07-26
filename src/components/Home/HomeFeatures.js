import React from "react";
import HomeList from "../Home/HomeList";

const Features = () => {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-2xl ml-12">
        Selections of classes to pick from
      </h1>
      <p className="ml-12 font-light text-lg mt-2">
        Chose from our 12,230 AI classes to teach your self and learn new things
      </p>
      <ul className="flex items-center gap-10 ml-12 font-semibold text-gray-600 mt-6">
        <li>IT</li>
        <li>Web development</li>
        <li>Journalism</li>
        <li>CyberSecruity</li>
      </ul>
      <div className="border border-gray-400 p-6 mt-3 ml-12 h-[300px] mr-12">
        <p className="font-bold text-2xl tracking-wide ">
          Break into your dream job and take off a new skills
        </p>
        <p className="tracking-wide w-[940px] text-gray-600 font-light text-sm mt-3">
          Central main goals are to help self taught people to learn new things
          and to connect with others that are in that category. Being in groups
          is like in school with groups projects. We enjoy seeing others connect
          with each other and learn from each other, other than using our AI.
          Having a understand of what you doing or getting into is great, that's
          why central wanted to implent in real life things.
        </p>
        <button className="border border-black text-sm font-medium p-3 mt-4 hover:bg-white card2 ">
          Explore Categories
        </button>
      </div>
    </div>
  );
};

export default Features;
