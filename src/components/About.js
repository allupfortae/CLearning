import React from "react";

const About = () => {
  return (
    <div className=" container mt-11 ml-12">
      <div>
        <p className="text-gray-600 text-lg font-light w-11/12 mr-0">
          Central is based off real life problems and situations, each career
          you choses gives out homework for you to study and practice, turn them
          in and your grade will move or down like you are in school.
        </p>
      </div>
      <div className=" ml-14 mt-11 grid grid-cols-3 ">
        <div>
          <p className="text-xl font-bold">Central groups</p>
          <p className="text-blue-700 font-bold text-3xl mt-7">80%</p>
          <p className="text-light w-72 mt-2 text-gray-600 mr-0">
            Results shows that people pefer working togther to learn new things
            and always have others to depend on if needed help.
          </p>
        </div>

        <div>
          <p className="text-xl font-bold">Doing Homework</p>
          <p className="text-blue-700 font-bold text-3xl mt-7">95%</p>
          <p className="text-light w-72 mt-2  text-gray-600 mr-0">
            Having to do homework and having someone to make you do it as a
            grade will results into putting some effort to study.
          </p>
        </div>
        <div>
          <p className="text-xl font-bold">Grow your education</p>
          <p className="text-blue-700 font-bold text-3xl mt-7">100%</p>
          <p className="text-light w-72 mt-2  text-gray-600 mr-0">
            The central team is all about making people achive they goals and
            becoming more knoweldgeable at anything you find enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
