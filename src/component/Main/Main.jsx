import React from "react";
import "./Main.css";
import Type from "./Type";
import Social from "../Social/Social"
import ParticlesBackground from "../particles/ParticlesBackground";

const Main = () => {
  return (
    <div id="home">
      {/* Background with particles + overlay */}
      <ParticlesBackground />

      {/* Main content */}
      <div className="home-content-main">
        <div className="table-cell">
          <div className="container">
            <div className="row home-row">
              <div className="col-md-12 col-sm-12">
                <div className="home-text wow fadeIn text-center">
                  <h1 className="cd-headline clip is-full-width">
                    <Type />
                  </h1>
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;



