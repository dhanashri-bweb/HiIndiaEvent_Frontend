"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Booking.module.css";
import { Container, Modal, Button } from "react-bootstrap";

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  kidsTickets: string;
  adultsTickets: string;
  freeTickets: string;
  ticketType: string;
  amount: string;
}

interface FormErrors {
  [key: string]: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    kidsTickets: "",
    adultsTickets: "",
    freeTickets: "",
    ticketType: "",
    amount: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "coupon" && !value.trim()) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
        isValid = false;
      }
    });

    // Additional validation for email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const calculateTotalAmount = (): number => {
    const kidsTickets = parseInt(formData.kidsTickets) || 0;
    const adultsTickets = parseInt(formData.adultsTickets) || 0;
    const freeTickets = parseInt(formData.freeTickets) || 0;

    // Cost per ticket
    const kidsTicketPrice = 100;
    const adultsTicketPrice = 200;

    // Calculate total based on ticket counts
    const totalAmount =
      kidsTickets * kidsTicketPrice +
      adultsTickets * adultsTicketPrice +
      freeTickets * 0;
    return totalAmount;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <Container>
      <div className={styles.inquiry}>
        <form className={styles.inquiryForm} onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className={styles.formRow}>
            <div className={styles.inputContainer}>
              Tickets For Kids
              <input
                type="number"
                name="kidsTickets"
                placeholder="No. Tickets For Kids"
                step="1"
                min="0"
                max="9"
                className={styles.inputField}
                value={formData.kidsTickets}
                onChange={handleInputChange}
              />
              {errors.kidsTickets && (
                <p className={styles.error}>{errors.kidsTickets}</p>
              )}
            </div>
            <div className={styles.inputContainer}>
              Tickets For Adults
              <input
                type="number"
                name="adultsTickets"
                placeholder="No. Tickets For Adults"
                step="1"
                min="0"
                max="9"
                className={styles.inputField}
                value={formData.adultsTickets}
                onChange={handleInputChange}
              />
              {errors.adultsTickets && (
                <p className={styles.error}>{errors.adultsTickets}</p>
              )}
            </div>
            <div className={styles.inputContainer}>
              Tickets For Free
              <input
                type="number"
                name="freeTickets"
                placeholder="No. Tickets For Free"
                step="1"
                min="0"
                max="9"
                className={styles.inputField}
                value={formData.freeTickets}
                onChange={handleInputChange}
              />
              {errors.freeTickets && (
                <p className={styles.error}>{errors.freeTickets}</p>
              )}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputContainer}>
              Enter Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.inputField}
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles.inputContainer}>
              Enter Email
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.inputField}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
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
              />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}
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
              />
            </div>
            <div className={styles.inputContainer}>
              Tickets Type
              <select
                name="ticketType"
                className={styles.inputField}
                value={formData.ticketType}
                onChange={handleInputChange}
              >
                <option value="">Select Type</option>
                <option value="vip">VIP</option>
                <option value="luxury">Luxury</option>
                <option value="earlybird">Early Bird</option>
              </select>
              {errors.ticketType && (
                <p className={styles.error}>{errors.ticketType}</p>
              )}
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
                className={styles.inputField}
                value={calculateTotalAmount()}
                onChange={handleInputChange}
              />
              {errors.amount && <p className={styles.error}>{errors.amount}</p>}
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            style={{ fontSize: "20px" }}
          >
            Book Now
          </button>
        </form>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        dialogClassName={styles.customModal}
      >
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>
            Booking Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div>
            <h5>Name: {formData.name}</h5>
            <h5>Email: {formData.email}</h5>
            <h5>Phone: {formData.phone}</h5>
            <h5>Ticket Type: {formData.ticketType}</h5>
            <h5>Tickets for Kids: {formData.kidsTickets}</h5>
            <h5>Tickets for Adults: {formData.adultsTickets}</h5>
            <h5>Free Tickets: {formData.freeTickets}</h5>
            <h5>Coupon Code: {formData.coupon || "N/A"}</h5>
            <hr />
            <h4>Total Amount: ₹{calculateTotalAmount()}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => alert("Payment Successful!")}
          >
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Booking;
