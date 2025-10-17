// import React from "react";
// import "./Apply.css";

// const Apply = () => {
//   return (
//     <section className="apply-section">
//       <h2 className="apply-heading">Want to join our team?</h2>
//       <a 
//         href="/apply" 
//         target="_blank"
//         rel="noopener noreferrer"
//         className="apply-btn"
//         >
//         Apply Now
//       </a>
//     </section>
//   );
// };

// export default Apply;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Apply.css";

const Apply = () => {
  const navigate = useNavigate();

  const handleApplyClick = (e) => {
    e.preventDefault();
    // Open the /apply route in a new tab within the same SPA
    const newTab = window.open(window.location.origin + "/apply", "_blank", "noopener,noreferrer");
    if (newTab) newTab.focus();
  };

  return (
    <section className="apply-section">
      <h2 className="apply-heading">Want to join our team?</h2>
      <button className="apply-btn" onClick={handleApplyClick}>
        Apply Now
      </button>
    </section>
  );
};

export default Apply;
