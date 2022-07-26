import React from "react";
import Plans from "../components/Plans";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterList from "../components/FooterList";

const PlansPage = () => {
  return (
    <div>
      <Navbar />
      <Plans />
      <div className="mt-8 h-64 w-full flex ">
        <div className="flex gap-2">
          <FooterList />
          <FooterList />
          <FooterList />
          <FooterList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PlansPage;
