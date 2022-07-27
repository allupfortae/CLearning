import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterList from "../components/FooterList";

const AccountPage = ({ firstletter, name, data, letter }) => {
  return (
    <div>
      <Navbar name={name} letter={letter} />
      <Home firstletter={firstletter} data={data} letter={letter} />
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

export default AccountPage;
