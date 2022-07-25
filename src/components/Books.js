import FeaturedBooks from "./FeaturedBooks";
import Exam from "./Exams";
import { data } from "autoprefixer";

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
      <div className="container grid grid-cols-5  gap-5 ml-10">
        <FeaturedBooks />
        <FeaturedBooks />
        <FeaturedBooks />
        <FeaturedBooks />
        <FeaturedBooks />
      </div>
      <div>
        <Exam />
      </div>
    </div>
  );
};

export default Books;
