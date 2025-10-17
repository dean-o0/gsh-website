import React from "react";
import "./Footer.css";
import Social from "../Social/Social";

var d = new Date();
var currYear = d.getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className="copyright-details">
                <div>
                    <div className="row contact-info-row text-center wow fadeIn">
                        <div className="col-md-4 col-sm-6 contact-column">
                            <div className="contact-col-info" data-wow-delay=".2s">
                                <i className="fa fa-map-marker contact-icon" aria-hidden="true"></i>
                                <h3>Address</h3>
                                <p>10 Pepper Street</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 contact-column">
                            <div className="contact-col-info" data-wow-delay=".4s">
                                <i className="fa fa-envelope contact-icon" aria-hidden="true"></i>
                                <h3>Email</h3>
                                <a href="mailto:info@goldstandardholdings.co.za">
                                    info@goldstandardholdings.co.za
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 contact-column">
                            <div className="contact-col-info" data-wow-delay=".6s">
                                <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
                                <h3>Telephone</h3>
                                <a href="tel:+27211800474">
                                    021 180 0474
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Social />
                <div className="copyright">
                    <h3>&copy; {currYear}, GSH. Gold</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer;