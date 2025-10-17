import React from "react";
import "./Clients.css";

const Clients = () => {
  return (
    <div id="clients">
      <div className="clients-content">
        <div className="clients-title text-center">
          <h3>Meet Our Clients</h3>
          <p>We are proud to work with leading companies across South Africa.</p>
        </div>

        <div className="clients-div">
          <div className="clients-grid">
            <a
              href="https://www.blackwoodpower.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2018/06/bwp.png"
                alt="Blackwood Power"
              />
            </a>

            <a
              href="https://coolideas.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2018/06/coolideas.png"
                alt="Cool Ideas"
              />
            </a>

            <a
              href="https://www.frogfoot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2019/02/frogfoot.png"
                alt="Frogfoot"
              />
            </a>

            <a
              href="https://www.telkom.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2018/06/1280px-TelkomSA.svg_.png"
                alt="Telkom"
              />
            </a>

            <a
              href="https://www.cellc.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2019/02/cellc-logo.png"
                alt="Cell C"
              />
            </a>

            <a
              href="https://vumafibre.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2018/06/vumatel.png"
                alt="Vuma"
              />
            </a>

            <a
              href="https://vumafibre.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2018/06/lanline.png"
                alt="Lanline"
              />
            </a>

            <a
              href="https://vumafibre.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.goldstandardholdings.co.za/wp-content/uploads/2019/02/syncro.png"
                alt="Syncro"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
