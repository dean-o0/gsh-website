import React from "react";
import "./Social.css";

const Social = () => {
    return (
            <div className="about-social-icon text-center">
                <ul className="about-social">
                    <li className="wow fadeIn" data-wow-delay=".8s">
                        <a href="https://x.com/unlimited_kings" target="newtab">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="wow fadeIn" data-wow-delay=".6s">
                        <a
                            href="https://www.linkedin.com/company/gold-standard-holdings-international/?originalSubdomain=za"
                            target="newtab"
                        >
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="wow fadeIn" data-wow-delay=".4s">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@goldstandardholdings.co.za"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
    )
}

export default Social;