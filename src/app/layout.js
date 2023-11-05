import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <CustomNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
