import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import CTA from "./components/CTA/CTA.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="body">
        <div className="hero">
          <Hero />
        </div>
        <div className="page">
        <CTA />
        </div>
      </div>
    </>
  );
};

export default App;
