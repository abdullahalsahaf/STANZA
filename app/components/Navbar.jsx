"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import StanzaLogo from "./StanzaLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Scrolled background opacity transition
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <motion.div
        style={{
          backgroundColor: scrolled ? "rgba(6, 10, 16, 0.85)" : "rgba(6, 10, 16, 0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--glass-border)"
            : "1px solid transparent",
          transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "padding 0.4s ease",
          }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* SVG Logo Mark */}
            <StanzaLogo size={36} />
            
            <span
              className="text-accent-gradient accent-glow-text"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Stanza
            </span>
          </motion.button>

          {/* Nav Links - Desktop */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="hidden md:flex"
          >
            {["Services", "About", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--plat-300)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  position: "relative",
                  padding: "0.25rem 0",
                  transition: "color 0.3s ease",
                }}
                whileHover={{ y: -1, color: "var(--accent-300)" }}
              >
                {item}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: "1px",
                    background: "linear-gradient(90deg, var(--accent-500), var(--accent-300))",
                    transition: "width 0.3s ease",
                  }}
                  className="group-hover:w-full"
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="btn-accent hidden md:block"
            style={{
              padding: "0.6rem 1.5rem",
              borderRadius: "0.65rem",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Request a Draft
          </motion.button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--plat-300)",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass"
            style={{
              margin: "0 1rem 1rem",
              borderRadius: "1rem",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {["Services", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--plat-200)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  textAlign: "left",
                  padding: "0.5rem 0",
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-accent"
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.65rem",
                fontSize: "0.75rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              Request a Draft
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}
