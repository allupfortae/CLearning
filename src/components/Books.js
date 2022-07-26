import React from "react";
import FeaturedBooks from "./FeaturedBooks";
import Exam from "./Exams";
import bookdatas from "./Data/BookData";

const Books = () => {
  return (
    <div>
      <div className="flex items-center mt-8 gap-3">
        <h1 className="text-2xl font-bold ml-14 ">Get books on your journey</h1>
        <a href="#" className="text-purple-700 text-2xl font-bold underline ">
          Designer
        </a>
        <a href="#" className="text-purple-700 text-2xl font-bold underline ">
          Web Development
        </a>
        <a href="#" className="text-purple-700 text-2xl font-bold underline ">
          Ethical Hacker
        </a>
        <a href="#" className="text-purple-700 text-2xl font-bold underline ">
          JavaScript
        </a>
        <a href="#" className="text-purple-700 font-medium underline text-xl">
          More
        </a>
      </div>
      <div className="grid grid-cols-4  gap-10 ml-10">
        <FeaturedBooks
          id={bookdatas[0].id}
          img={require("../images/cyberattacks.jpg")}
          desc={bookdatas[0].desc}
          auth={bookdatas[0].auth}
          ratings={bookdatas[0].ratings}
        />
        <FeaturedBooks
          id={bookdatas[1].id}
          img={require("../images/math.webp")}
          desc={bookdatas[1].desc}
          auth={bookdatas[1].auth}
          ratings={bookdatas[1].ratings}
        />
        <FeaturedBooks
          id={bookdatas[2].id}
          img={require("../images/science.webp")}
          desc={bookdatas[2].desc}
          auth={bookdatas[2].auth}
          ratings={bookdatas[2].ratings}
        />
        <FeaturedBooks
          id={bookdatas[3].id}
          img={require("../images/LinkedIn.jpg")}
          desc={bookdatas[3].desc}
          auth={bookdatas[3].auth}
          ratings={bookdatas[3].ratings}
        />
      </div>
      <div>
        <Exam />
      </div>
    </div>
  );
};

export default Books;
