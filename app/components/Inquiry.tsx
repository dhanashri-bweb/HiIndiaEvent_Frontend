'use client';

import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from './Inquiry.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Inquiry: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;


    if (name === "phone" && value && !/^[0-9+]*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      // Clear the form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });

      alert("Form submitted successfully!");
    }
  };

  return (
    <div className={styles.inquiry}>
      <div className={styles.heading}>
        <span>INQUIRY</span>
        <p className={styles.sTitle}>Get In Touch</p>
      </div>
      <form className={styles.inquiryForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={styles.inputField}
              value={formData.name}
              onChange={handleInputChange}
            
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={styles.inputField}
              value={formData.email}
              onChange={handleInputChange}
              
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className={styles.inputField}
              value={formData.phone}
              onChange={handleInputChange}
              
            />
          </div>
        </div>
        <div className={`${styles.formRow} `}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className={styles.inputField}
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formRow} `}>
        
          <textarea
          
            name="message"
            placeholder="Message"
            required
            className={`${styles.inputField} ${styles.messageField}`}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && <p className={styles.errorText}>{errors.message}</p>}
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
