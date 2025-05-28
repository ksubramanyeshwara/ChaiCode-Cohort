import { useState } from "react";
import { useContactForm } from "./hooks/useContactForm";

function ContactForm() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { error, loading, successMessage, submitContact } = useContactForm();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="Name"
          value={FormData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        <input
          name="Email"
          value={FormData.email}
          onChange={handleChange}
          placeholder="Enter Your E-mail"
        />
        <textarea
          name="message"
          value={FormData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
        />
        <button type="Submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
    </>
  );
}

export default ContactForm;
