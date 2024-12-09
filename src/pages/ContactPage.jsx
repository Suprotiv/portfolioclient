import axios from "axios";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const backgroundImage = "lfc.webp";

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is submitting
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted

  // EmailJS Configuration
  const SERVICE_ID = "service_4vk517l";
  const TEMPLATE_ID = "template_ukwg8p9";
  const PUBLIC_KEY = "QanroUq_HUurhdbsC";

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    // Basic validation
    if (!name || !email || !phone || !message) {
      setError("All fields are required.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    // Prepare EmailJS payload
    const emailData = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        name: name,
        email: email,
        to_name: "Suprotiv", // Update this to your name or business name
        message: `${message}\n\nPhone: ${phone}`,
      },
    };

    setIsSubmitting(true); // Start loading

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailData
      );
      console.log(res.data);

      setSuccess("Your message has been sent successfully!");
      setIsSubmitted(true); // Mark as submitted
    } catch (error) {
      console.error(error);
      setError("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <div
    className="min-h-screen text-white py-20 bg-cover bg-center bg-no-repeat relative animate-fadeIn"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 33,1), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
      backgroundAttachment: "fixed", // Ensures the background is fixed
    }}
  >
      <div className="flex justify-center items-center">
      <div className="w-full max-w-3xl px-6 py-12 bg-gray-900 rounded-lg shadow-lg my-5 animate-fadeIn ">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
        <p className="text-center text-gray-400 mb-6">
          Have a project in mind? Feel free to reach out.
        </p>
        {error && (
          <div className="mb-4 text-center text-red-500 font-semibold">
            {error}
          </div>
        )}
        {success && isSubmitted && (
          <div className="text-center text-green-500 font-semibold text-lg">
            {success}
          </div>
        )}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={4}
                className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full"></span>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
