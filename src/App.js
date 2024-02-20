import React from "react";
import Dropdown from './'
import './App.css'
// <!-- Pages -->
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";
import Router from "../src/Router/Router";

const App = () => {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- Navbar End --> */}
      {/* <!-- Router --> */}
      <Router />
      {/* <!-- Router End --> */}
      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- Footer End --> */}
    </div>
  );
};

export default App;
