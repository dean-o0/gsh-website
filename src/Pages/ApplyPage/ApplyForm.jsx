import React, { useState, useRef } from "react";
import "./ApplyForm.css";
import { validateApplyForm } from "../../utils/validation";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    license: "",
    vehicle: "",
    area: "",
    experience: "",
    languages: [],
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Ref for file input
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const langs = prev.languages.includes(value)
          ? prev.languages.filter((l) => l !== value)
          : [...prev.languages, value];
        return { ...prev, languages: langs };
      });
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, cv: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateApplyForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (key === "languages") {
            data.append(key, JSON.stringify(value));
          } else {
            data.append(key, value);
          }
        });

        const response = await fetch("http://localhost:4000/api/apply", {
          method: "POST",
          body: data,
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            license: "",
            vehicle: "",
            area: "",
            experience: "",
            languages: [],
            cv: null,
          });

          // ✅ Clear the file input value
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }

          // ✅ Hide success message after 5s
          setTimeout(() => setSubmitted(false), 4000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="apply-container">
      <div className="apply-title">
        <h2>Apply Now</h2>
      </div>

      <div className="apply-box">
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          {errors.name && <div className="error-message">{errors.name}</div>}
          <input
            name="name"
            type="text"
            placeholder="Full Name (required)"
            onChange={handleChange}
            value={formData.name}
          />

          {/* Email */}
          {errors.email && <div className="error-message">{errors.email}</div>}
          <input
            name="email"
            type="email"
            placeholder="Your Email (required)"
            onChange={handleChange}
            value={formData.email}
          />

          {/* Phone */}
          {errors.phone && <div className="error-message">{errors.phone}</div>}
          <input
            name="phone"
            type="tel"
            placeholder="Your Cell Phone Number (required)"
            onChange={handleChange}
            value={formData.phone}
          />

          {/* License */}
          {errors.license && <div className="error-message">{errors.license}</div>}
          <label>Do you have a driver's license?</label>
          <select name="license" onChange={handleChange} value={formData.license}>
            <option value="">--Select--</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          {/* Vehicle */}
          {errors.vehicle && <div className="error-message">{errors.vehicle}</div>}
          <label>Do you have a vehicle?</label>
          <select name="vehicle" onChange={handleChange} value={formData.vehicle}>
            <option value="">--Select--</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          {/* Area */}
          {errors.area && <div className="error-message">{errors.area}</div>}
          <input
            name="area"
            type="text"
            placeholder="What area do you live in?"
            onChange={handleChange}
            value={formData.area}
          />

          {/* Experience */}
          {errors.experience && <div className="error-message">{errors.experience}</div>}
          <label>How many years sales experience do you have?</label>
          <input
            name="experience"
            type="number"
            min="0"
            onChange={handleChange}
            value={formData.experience}
          />

          {/* Languages */}
          {errors.languages && <div className="error-message">{errors.languages}</div>}
          <label>What languages are you fluent in?</label>
          <div className="checkbox-group">
            {["English", "Zulu", "Afrikaans", "Xhosa"].map((lang) => (
              <label key={lang}>
                <input
                  type="checkbox"
                  value={lang}
                  checked={formData.languages.includes(lang)}
                  onChange={handleChange}
                />{" "}
                {lang}
              </label>
            ))}
          </div>

          {/* CV */}
          {errors.cv && <div className="error-message">{errors.cv}</div>}
          <label>CV</label>
          <input
            name="cv"
            type="file"
            ref={fileInputRef} // ✅ add ref here
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending" : "Send Message"}
          </button>

          {submitted && (
            <div className="success-message">Application sent successfully!</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
