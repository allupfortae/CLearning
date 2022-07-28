import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterList from "../components/FooterList";

const AccountPage = (props) => {
  return (
    <div>
      <Navbar id={props.id} fName={props.fName} userName={props.userName} />
      <Home
        id={props.id}
        fName={props.fName}
        fsName={props.fsName}
        inGroup={props.inGroup}
        inClasses={props.inClasses}
        status={props.status}
        hoster={props.hoster}
      />
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
