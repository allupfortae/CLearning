import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "../src/pages/HomePage.tsx";
import Plans from "../src/pages/PlansPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterList from "./components/FooterList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
      <div className="mt-8 h-64 w-full flex ">
        <div className="flex gap-2">
          <FooterList />
          <FooterList />
          <FooterList />
          <FooterList />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
