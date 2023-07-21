import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Cards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
