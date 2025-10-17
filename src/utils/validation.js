// src/utils/validation.js

// Simple regex helpers
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{7,15}$/;

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name = "Full name is required";
  }

  if (!formData.email?.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!formData.message?.trim()) {
    errors.message = "Message cannot be empty";
  }

  return errors;
};

export const validateApplyForm = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name = "Full name is required";
  }

  if (!formData.email?.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!formData.phone?.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Enter a valid phone number (7–15 digits)";
  }

  if (!formData.license) {
    errors.license = "Please select whether you have a driver's license";
  }

  if (!formData.vehicle) {
    errors.vehicle = "Please select whether you have a vehicle";
  }

  if (!formData.area?.trim()) {
    errors.area = "Please enter your area";
  }

  if (formData.experience === "" || formData.experience === null) {
    errors.experience = "Please enter years of sales experience";
  }

  if (!formData.languages?.length) {
    errors.languages = "Select at least one language";
  }

  if (!formData.cv) {
    errors.cv = "Please upload your CV";
  }

  return errors;
};
