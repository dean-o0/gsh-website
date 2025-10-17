import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    FLNAME: "",
    EMAIL: "",
    PHONE: "",
    MESSAGE: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ new loading state

  const validate = () => {
    let newErrors = {};

    if (!formData.FLNAME.trim()) {
      newErrors.FLNAME = "Please enter your name.";
    }

    if (!formData.EMAIL.trim()) {
      newErrors.EMAIL = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.EMAIL)) {
      newErrors.EMAIL = "Please enter a valid email address.";
    }

    if (!formData.PHONE.trim()) {
      newErrors.PHONE = "Please enter your phone number.";
    } else if (!/^[0-9+\-()\s]+$/.test(formData.PHONE)) {
      newErrors.PHONE = "Please enter a valid phone number.";
    }

    if (!formData.MESSAGE.trim()) {
      newErrors.MESSAGE = "Please enter your message.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear individual field errors as the user types
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          FLNAME: "",
          EMAIL: "",
          PHONE: "",
          MESSAGE: "",
        });

        // ✅ Hide success message after 4 seconds
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <div className="contact-content">
        <div className="text-grid">
          <div className="text-grid-main">
            <div className="container">
              <div className="contact-box">
                <div className="contact-title text-center wow fadeIn">
                  <h3>Contact Us</h3>
                  <p>Have a project in mind?</p>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-form-details wow fadeIn">
            <div className="container">
              <div className="row contact-row">
                <h3>Write Your Message Here</h3>
                <div className="contact-form">
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="form-group">
                      {errors.FLNAME && (
                        <div className="error-message">{errors.FLNAME}</div>
                      )}
                      <input
                        type="text"
                        name="FLNAME"
                        id="mce-FLNAME"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.FLNAME}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      {errors.EMAIL && (
                        <div className="error-message">{errors.EMAIL}</div>
                      )}
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.EMAIL}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      {errors.PHONE && (
                        <div className="error-message">{errors.PHONE}</div>
                      )}
                      <input
                        type="text"
                        name="PHONE"
                        id="mce-PHONE"
                        className="form-control"
                        placeholder="Your Phone"
                        value={formData.PHONE}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      {errors.MESSAGE && (
                        <div className="error-message">{errors.MESSAGE}</div>
                      )}
                      <textarea
                        id="mce-MESSAGE"
                        rows="7"
                        name="MESSAGE"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.MESSAGE}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting} // ✅ prevents double-click
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {/* Success Message */}
                    {submitted && (
                      <div className="success-message">
                        Your message has been sent successfully!
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
