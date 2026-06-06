"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Statement of Purpose",
    abbr: "SOP",
    description:
      "A meticulously crafted narrative that captures your academic journey and research aspirations — designed to resonate with admissions committees.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Motivation Letter",
    abbr: "ML",
    description:
      "A compelling declaration of intent that weaves your passions, experiences, and goals into a persuasive narrative for your ideal candidacy.",
    icon: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM13 2v7h7",
  },
  {
    title: "Cover Letter",
    abbr: "CL",
    description:
      "A strategically structured introduction that bridges your experience with employer expectations — an irresistible professional proposition.",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  },
  {
    title: "CV / Europass CV",
    abbr: "CV",
    description:
      "A refined professional profile presenting your qualifications and achievements in an internationally recognized format for global opportunities.",
    icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  },
  {
    title: "Custom Document Drafts",
    abbr: "CD",
    description:
      "Bespoke writing solutions — from research proposals and scholarship essays to personal statements and professional communications.",
    icon: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <motion.div
        className="glass-card"
        style={{
          borderRadius: "1.25rem",
          padding: "2rem",
          height: "100%",
          cursor: "default",
          position: "relative",
          overflow: "hidden",
        }}
        whileHover={{
          y: -8,
          transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
        }}
      >
        {/* Hover gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.25rem",
            background:
              "linear-gradient(135deg, rgba(16,185,129,0) 0%, rgba(16,185,129,0) 100%)",
            transition: "background 0.6s ease",
          }}
          className="group-hover-overlay"
        />
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "2rem",
            right: "2rem",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(16,185,129,0.15), transparent)",
            opacity: 0,
            transition: "opacity 0.6s ease",
          }}
        />

        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "0.75rem",
                background:
                  "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.03))",
                border: "1px solid rgba(16,185,129,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-400)",
                transition: "all 0.5s ease",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" style={{ width: "24px", height: "24px" }}>
                <path
                  d={service.icon}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "var(--plat-500)",
                textTransform: "uppercase",
                fontFamily: "var(--font-display)",
              }}
            >
              {service.abbr}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.15rem",
              fontWeight: 600,
              color: "var(--plat-100)",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--plat-400)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            {service.description}
          </p>

          {/* Learn More */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--accent-400)",
              opacity: 0.65,
              transition: "opacity 0.4s ease, color 0.4s ease",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-display)",
              }}
            >
              Learn More
            </span>
            <svg
              style={{ width: "14px", height: "14px" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      style={{ padding: "7rem 2rem", position: "relative" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            What We Offer
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "var(--plat-100)",
            }}
          >
            Our{" "}
            <span
              className="text-accent-gradient"
              style={{ fontWeight: 400 }}
            >
              Services
            </span>
          </h2>
          <div
            style={{
              marginTop: "1rem",
              width: "60px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)",
              margin: "1rem auto 0",
            }}
          />
          <p
            style={{
              marginTop: "1.25rem",
              color: "var(--plat-400)",
              fontSize: "0.9rem",
              maxWidth: "520px",
              margin: "1.25rem auto 0",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Each document is handcrafted by industry specialists who understand
            the nuances of professional communication.
          </p>
        </motion.div>

        {/* Cards Grid - 3 on top, 2 centered below */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
          className="services-grid"
        >
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.abbr} service={service} index={i} />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            maxWidth: "740px",
            margin: "1.5rem auto 0",
          }}
          className="services-grid-bottom"
        >
          {services.slice(3).map((service, i) => (
            <ServiceCard
              key={service.abbr}
              service={service}
              index={i + 3}
            />
          ))}
        </div>

        {/* Responsive overrides */}
        <style jsx>{`
          @media (max-width: 900px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .services-grid-bottom {
              grid-template-columns: 1fr !important;
              max-width: 400px !important;
            }
          }
          @media (max-width: 600px) {
            .services-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
