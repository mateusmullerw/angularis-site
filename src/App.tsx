import React from "react";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Navbar from "./components/Navbar/Navbar";
import "styles/app.scss";
import Products from "./sections/Products/Products";
import Clients from "./sections/Clients/Clients";
import Services from "./sections/Services/Services";
import DotsAnimation from "./components/DotsAnimation/DotsAnimation";
import Discount from "./sections/Discount/Discount";
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DotsAnimation />
      <Products />
      <About />
      <Clients />
      <Services />
      <Discount />
    </div>
  );
}

export default App;
