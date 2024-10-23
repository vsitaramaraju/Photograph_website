import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Handle input change
  const handleInputChange = useCallback(e => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  }, []);

  // EmailJS form submission handler
  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceId = "service_h1inlmh";
    const templateId = "template_lsgp31b";
    const publicKey = "gA9B7CiukDmoKELDm";

    const emailParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        emailParams,
        publicKey
      );
      console.log("Email successfully sent!", result.text);
      setToastMessage(
        "Your message has been sent successfully! We will get back to you soon"
      );
      setToastType("success");
      showBootstrapToast();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.log("Email failed to send!", error.text);
      setToastMessage(
        "There was an issue sending your message. Please try again."
      );
      setToastType("error");
      showBootstrapToast();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simple client-side validation
  const validateForm = () => {
    const { email, phone } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      setToastMessage("Please enter a valid email address.");
      setToastType("error");
      showBootstrapToast();
      return false;
    }

    if (!phoneRegex.test(phone)) {
      setToastMessage("Please enter a valid 10-digit phone number.");
      setToastType("error");
      showBootstrapToast();
      return false;
    }

    return true;
  };

  // Function to display the toast
  const showBootstrapToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-12">
          <div
            className="card form-card p-4"
            style={{ border: "none", boxShadow: "none" }}
          >
            <h2 className="text-center mb-4" style={{ letterSpacing: "1px" }}>
              GET IN TOUCH
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bootstrap Toast Notification */}
      <div
        className={`toast position-fixed top-0 end-1 p-3 ${
          showToast ? "show" : ""
        }`}
        style={{ zIndex: 11 }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div
          className={`toast-header ${
            toastType === "success" ? "bg-success" : "bg-danger"
          } text-white`}
        >
          <strong className="me-auto">
            {toastType === "success" ? "Success" : "Error"}
          </strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setShowToast(false)}
          ></button>
        </div>
        <div className="toast-body">
          {toastType === "success" ? (
            <>
              <strong>{`Thank you for Choosing Love Tales Studo 😊`} </strong>
              {toastMessage}
            </>
          ) : (
            toastMessage
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactMe);
