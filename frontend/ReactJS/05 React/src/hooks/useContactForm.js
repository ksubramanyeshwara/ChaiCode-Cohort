import { useState } from "react";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setErrorMessage] = useState(null);

  const submitContact = async (FormData) => {
    setLoading(true);
    // clears error and success messages from previous requests
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");
      setSuccessMessage(data.success || "Message sent successfully!");
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong");
    }
  };
  return { loading, successMessage, error, submitContact };
}
