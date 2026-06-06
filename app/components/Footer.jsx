"use client";

import { motion } from "framer-motion";
import StanzaLogo from "./StanzaLogo";

export default function Footer() {
  return (
    <footer style={{ padding: "4rem 2rem", position: "relative" }}>
      {/* Divider */}
      <div
        className="section-divider"
        style={{ maxWidth: "600px", margin: "0 auto 4rem" }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/* Logo */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* SVG Logo Component */}
            <StanzaLogo size={32} />
            
            <span
              className="text-accent-gradient"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Stanza
            </span>
          </motion.div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {["Privacy", "Terms", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--plat-500)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--accent-400)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--plat-500)")
                }
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--plat-600)",
              fontWeight: 300,
              fontFamily: "var(--font-body)",
            }}
          >
            &copy; {new Date().getFullYear()} STANZA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
