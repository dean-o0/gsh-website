import React from "react";
import ReactDOM from "react-dom/client";
import "./About.css"


const About = () => {
  return (
    <div id="about">
      <div className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title text-center wow fadeIn">
                <h3>Who Are We?</h3>
                <div className="underline1"></div>
                <div className="underline2"></div>
                <p>
                  Gold Standard Holdings (GSH) is a boutique sales and strategic
                  investment holding business that focuses on innovative opportunities
                  in the marketing and telecommunications industries. GSH operates
                  predominately in the private equity sector and pursues lucrative
                  ventures that will grow and diversify its company base.
                  <br /><br />
                  Founded in Cape Town in 2016, we're hungry to leave a significant
                  mark on all that we take on. Currently, we are working on a variety
                  of projects primarily in the telecommunications industry. We are
                  business enthusiasts and want our work to develop all facets of the
                  economy.
                  <br /><br />
                  As a young, yet sharp business, GSH has interests in businesses that
                  are transforming the realm of sales by fusing classic direct sales
                  with the latest technological solutions. We are always on the hunt
                  for the next big opportunity, hoping to build a diversified
                  investment base that responds to the rapidly changing market.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="work-counter text-center">
          <div className="container">
            <div className="row wow fadeIn">
              <div className="col-md-3 col-sm-6">
                <div className="work-statistics">
                  <i className="fa fa-building stat-icon" aria-hidden="true"></i>
                  <h3 className="Count">2016</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Founded</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="work-statistics">
                  <i className="fa fa-briefcase stat-icon" aria-hidden="true"></i>
                  <h3 className="Count">10+</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Projects</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="work-statistics">
                  <i className="fa fa-line-chart stat-icon" aria-hidden="true"></i>
                  <h3 className="Count">5+</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Industries</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="work-statistics">
                  <i className="fa fa-globe stat-icon" aria-hidden="true"></i>
                  <h3 className="Count">Global</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Outlook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
