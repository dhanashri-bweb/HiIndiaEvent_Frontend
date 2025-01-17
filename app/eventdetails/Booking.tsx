"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Booking.module.css";

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

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      <form className={styles.inquiryForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.inputContainer}>
            Tickets For Kids
            <input
              type="number"
              name="Tickets For Kids"
              placeholder="No.Tickets For Kids"
              step="1"
              min="0"
              max="9"
              required
              className={styles.inputField}
              // value={formData.name}
              // onChange={handleInputChange}
              style={{ width: "336px", height: "64px" }}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputContainer}>
            Tickets For Adults
            <input
              type="number"
              name="Tickets For Adults"
              placeholder="No.Tickets For Adults"
              step="1"
              min="0"
              max="9"
              required
              className={styles.inputField}
              // value={formData.name}
              // onChange={handleInputChange}
              style={{ width: "336px", height: "64px" }}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputContainer}>
            Tickets For Free
            <input
              type="number"
              name="Tickets For Free"
              placeholder="No.Tickets For Free"
              step="1"
              min="0"
              max="9"
              required
              className={styles.inputField}
              // value={formData.name}
              // onChange={handleInputChange}
              style={{ width: "336px", height: "64px" }}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputContainer}>
            Enter name
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className={styles.inputField}
              value={formData.name}
              onChange={handleInputChange}
              style={{ width: "336px", height: "64px" }}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputContainer}>
            Enter Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={styles.inputField}
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: "336px", height: "64px" }}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.inputContainer}>
            Enter Phone No
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className={styles.inputField}
              value={formData.phone}
              onChange={handleInputChange}
              style={{ width: "336px", height: "64px" }}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputContainer}>
            Enter Coupon Code
            <input
              type="text"
              name="coupon"
              placeholder="Coupon Code"
              className={styles.inputField}
              value={formData.name}
              onChange={handleInputChange}
              style={{ width: "336px", height: "64px" }}
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>
          <div className={styles.inputContainer}>
            Tickets Type
            <select
              required
              className={styles.inputField}
              style={{ width: "336px", height: "64px" }}
            >
              <option value="vip">VIP</option>
              <option value="luxury">Luxury</option>
              <option value="earlybird">Early Bird</option>
            </select>
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div className={styles.checkContainer}>
            <p className={styles.title}>Additional Confirmation</p>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              SMS
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              Whatsapp
            </label>
          </div>
        </div>
        <div>
          <div className={styles.totalAmount}>
            <p>Total Amount</p>
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              required
              className={styles.inputField}
             
            />
          </div>
        </div>

        <button type="submit" style={{ fontSize: "20px" }}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
