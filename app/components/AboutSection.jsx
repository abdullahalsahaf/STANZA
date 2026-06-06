"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "9+", label: "Countries Served" },
  { value: "1+", label: "Year of Experience" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ padding: "7rem 2rem", position: "relative" }}>
      {/* Divider */}
      <div
        className="section-divider"
        style={{ maxWidth: "600px", margin: "0 auto 5rem" }}
      />

      <div
        ref={ref}
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Text */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
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
              Who We Are
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "var(--plat-100)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Crafting Words <br />
              <span
                className="text-accent-gradient"
                style={{ fontWeight: 500, fontStyle: "italic" }}
              >
                That Open Doors
              </span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(16,185,129,0.5), transparent)",
                marginBottom: "1.5rem",
              }}
            />
            <p
              style={{
                color: "var(--plat-400)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1rem",
              }}
            >
              At STANZA, we believe every professional journey deserves a
              narrative as unique as the individual behind it. Our team of
              seasoned writers, editors, and strategists collaborate to produce
              documents that don&apos;t just meet standards — they set them.
            </p>
            <p
              style={{
                color: "var(--plat-400)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              From Ivy League admissions to Fortune 500 applications, we&apos;ve
              helped thousands of ambitious professionals articulate their vision
              with clarity, precision, and impact.
            </p>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
            transition={{
              duration: 1,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.15,
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card"
                style={{
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  textAlign: "center",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className="text-accent-gradient"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 600,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--plat-500)",
                    fontWeight: 500,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
