import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-content">
        <div className="portfolio-grid text-center">
          <div className="container">
            <div>
              <div className="container">
                {/* Title */}
                <div className="row main-row wow fadeIn">
                  <div className="col-md-12">
                    <div className="main-title text-center">
                      <h3>Channel Partners</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>

                <div className="row love-row">
                  {/* Connection Kings */}
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main text-center">
                        <img
                          src="https://www.goldstandardholdings.co.za/wp-content/uploads/2018/06/gg-1-768x768.png"
                          alt="Connection Kings"
                          className="partner-logo"
                          style={{ marginBottom: "0px" }}
                        />
                        <h3>Connection Kings</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          After partnering with some of South Africa's largest Internet clients Providers,
                          <strong> Connection Kings </strong> is changing the Fibre Optic Internet game.
                          We empower consumers with all the information they need to make informed choices
                          in an oversaturated market. Our mission is to connect you with the best Fibre Optic Internet.
                        </p>
                        <a
                          href="https://www.google.com/?zx=1758628430156&no_sw_cr=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          Go to Site
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Golden Gorilla */}
                  <div className="col-md-6 col-sm-12">
                    <div className="exp-details" data-wow-delay=".3s">
                      <div className="exp-hover"></div>
                      <div className="exp-main text-center">
                        <img
                          src="http://www.goldstandardholdings.co.za/wp-content/uploads/2018/06/ckLogo-300x211.png"
                          alt="Golden Gorilla"
                          className="partner-logo"
                          style={{ marginBottom: "40px" }}
                        />
                        <h3>Golden Gorilla</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          <strong>Golden Gorilla</strong> takes direct marketing back to basics.
                          With a passionate, highly trained sales force, we cover outsourced
                          marketing needs from door-to-door and call centres to social media
                          campaigns. Our goal: lasting connections with consumers, and
                          effortless guidance through the engagement process.
                        </p>
                        <div className="row">
                          <div className="col-md-12 text-center wow fadeIn">
                            <h3 style={{ marginTop: "26px" }}>Coming Soon!</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;