"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// ─── Change this URL to your Google Forms link ───
const GOOGLE_FORMS_URL = "https://forms.gle/bZtPM61rxhGLZiXn8";

const serviceOptions = [
  "Statement of Purpose (SOP)",
  "Motivation Letter",
  "Cover Letter",
  "CV / Europass CV",
  "Custom Document Draft",
];

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formData, setFormData] = useState({
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirect user to Google Forms
    if (GOOGLE_FORMS_URL) {
      window.open(GOOGLE_FORMS_URL, "_blank");
    } else {
      // Fallback/alert if no URL is provided yet
      alert("Redirecting to Google Form... (Please configure the GOOGLE_FORMS_URL in ContactForm.jsx with your actual form link)");
      window.open("https://docs.google.com/forms", "_blank");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(10, 16, 24, 0.8)",
    border: "1px solid var(--glass-border)",
    borderRadius: "0.75rem",
    padding: "0.9rem 1rem",
    fontSize: "0.85rem",
    color: "var(--plat-100)",
    fontFamily: "var(--font-body)",
    fontWeight: 300,
    transition: "all 0.3s ease",
    outline: "none",
    letterSpacing: "0.01em",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--plat-500)",
    marginBottom: "0.5rem",
    fontWeight: 600,
    fontFamily: "var(--font-body)",
  };

  return (
    <section
      id="contact"
      style={{ padding: "7rem 2rem", position: "relative" }}
    >
      {/* Divider */}
      <div
        className="section-divider"
        style={{ maxWidth: "600px", margin: "0 auto 5rem" }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "680px", margin: "0 auto" }}
      >
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent-500)",
              marginBottom: "1rem",
              fontFamily: "var(--font-display)",
            }}
          >
            Get In Touch
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "var(--plat-100)",
            }}
          >
            Request a{" "}
            <span
              className="text-accent-gradient"
              style={{ fontWeight: 500, fontStyle: "italic" }}
            >
              Draft
            </span>
          </h2>
          <div
            style={{
              marginTop: "1rem",
              width: "60px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent)",
              margin: "1rem auto 0",
            }}
          />
          <p
            style={{
              marginTop: "1.25rem",
              color: "var(--plat-400)",
              fontSize: "0.9rem",
              maxWidth: "480px",
              margin: "1.25rem auto 0",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Share your requirements and we&apos;ll craft a document that exceeds
            your expectations.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{
            duration: 1,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.12,
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card"
            style={{
              borderRadius: "1.5rem",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" style={labelStyle}>
                Select Service
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  appearance: "none",
                  cursor: "pointer",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364708a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option value="" disabled>
                  Choose a service...
                </option>
                {serviceOptions.map((s) => (
                  <option
                    key={s}
                    value={s}
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--plat-100)",
                    }}
                  >
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" style={labelStyle}>
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals, deadlines, or any specific requirements..."
                style={{
                  ...inputStyle,
                  resize: "none",
                  lineHeight: 1.7,
                }}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="btn-accent"
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "0.75rem",
                fontSize: "0.8rem",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit & Go to Google Form
            </motion.button>

            <p
              style={{
                textAlign: "center",
                fontSize: "0.7rem",
                color: "var(--plat-600)",
                fontWeight: 300,
              }}
            >
              You will be redirected to our Google Form questionnaire to complete your request.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
