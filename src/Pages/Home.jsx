import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import components
import Main from "../component/Main/Main";
import About from "../component/About/About";
import Portfolio from "../component/Portfolio/Portfolio";
import Clients from "../component/Clients/Clients";
import Contact from "../component/Contact/Contact";
import MapComponent from "../component/Map/MapComponent";
import Apply from "../component/Apply/Apply";

const Home = () => {
  const location = useLocation();

  // Scroll to section if there's a hash (e.g. #about)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // small delay ensures everything is mounted
      }
    }
  }, [location]);

  return (
    <div>
      <section id="home">
        <Main />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <MapComponent />

      <section id="apply">
        <Apply />
      </section>
    </div>
  );
};

export default Home;
