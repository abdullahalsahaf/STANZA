"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ─── Elegant quill writing lines ─── */
function WritingAnimation() {
  const lines = [
    { width: "180px", delay: 0, y: -40 },
    { width: "240px", delay: 1.5, y: -20 },
    { width: "160px", delay: 3, y: 0 },
    { width: "220px", delay: 4.5, y: 20 },
    { width: "140px", delay: 6, y: 40 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Central emerald ink glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.02) 35%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated writing lines */}
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ transform: `translateY(${line.y}px)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 + i * 0.3 }}
        >
          <motion.div
            style={{
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(16,185,129,${0.15 - i * 0.02}), transparent)`,
              width: line.width,
            }}
            animate={{
              opacity: [0, 0.6, 0.6, 0],
              scaleX: [0, 1, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Quill pen SVG */}
      <motion.div
        className="absolute"
        style={{ top: "30%", right: "32%" }}
        animate={{
          y: [0, -8, 0],
          rotate: [-12, -8, -12],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 4L16 52L12 60L20 56L48 4Z"
            stroke="rgba(16,185,129,0.25)"
            strokeWidth="1"
            fill="rgba(16,185,129,0.03)"
          />
          <path
            d="M16 52L12 60"
            stroke="rgba(16,185,129,0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="60"
            r="2"
            fill="rgba(16,185,129,0.15)"
          />
        </svg>
      </motion.div>

      {/* Soft emerald ink drops */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`drop-${i}`}
          className="absolute rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            left: `${42 + i * 8}%`,
            top: `${55 + i * 5}%`,
            background: `rgba(16,185,129,${0.2 - i * 0.05})`,
          }}
          animate={{
            scale: [0, 1, 1.5],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2 + i * 2.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Typewriter text effect ─── */
function TypewriterEffect() {
  const words = [
    "Statements of Purpose",
    "Motivation Letters",
    "Premium Cover Letters",
    "Curriculum Vitae (CV)",
    "Professional Narratives",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullWord = words[currentWordIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));

        if (currentText === currentFullWord) {
          // Finished typing, pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          // Move to next word
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      const speed = isDeleting ? 30 : 60;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span className="text-accent-gradient" style={{ fontWeight: 400 }}>
        {currentText}
      </span>
      <span
        style={{
          marginLeft: "4px",
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          backgroundColor: "var(--accent-400)",
          verticalAlign: "middle",
          animation: "blink-cursor 0.8s step-end infinite",
        }}
      />
    </span>
  );
}


export default function HeroSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 14,
        delay: Math.random() * 6,
      }))
    );
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.6,
      },
    },
  };

  const floatUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const floatUpSlow = {
    hidden: { y: 70, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: "0 2rem" }}
    >
      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background:
                p.id % 3 === 0
                  ? "rgba(16, 185, 129, 0.25)"
                  : "rgba(139, 149, 168, 0.12)",
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(p.id) * 15, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Writing animation behind text */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <WritingAnimation />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="relative z-10 text-center"
        style={{ maxWidth: "800px", margin: "0 auto" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={floatUp} style={{ marginBottom: "1.5rem" }}>
          <span
            className="glass"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              borderRadius: "999px",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent-300)",
              fontFamily: "var(--font-display)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent-500)",
                animation: "gentle-pulse 2s ease-in-out infinite",
              }}
            />
            Premium Writing Services
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={floatUpSlow}
          className="text-accent-gradient accent-glow-text"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            fontWeight: 200,
            letterSpacing: "0.18em",
            lineHeight: 0.9,
          }}
        >
          STANZA
        </motion.h1>

        {/* Dynamic Typewriter Subtitle */}
        <motion.div
          variants={floatUp}
          style={{
            marginTop: "1.5rem",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--plat-200)",
            minHeight: "2.5rem",
          }}
        >
          Crafting Your <TypewriterEffect />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          variants={floatUp}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.4), transparent)",
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={floatUp}
          style={{
            marginTop: "1.5rem",
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            color: "var(--plat-400)",
            maxWidth: "540px",
            margin: "1.5rem auto 0",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          We craft meticulously tailored documents that transform your
          ambitions into compelling narratives — SOPs, Cover Letters, CVs,
          and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={floatUp}
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-accent"
            style={{
              padding: "0.9rem 2.2rem",
              borderRadius: "0.75rem",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Get Started
          </motion.button>
          <motion.button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-outline"
            style={{
              padding: "0.9rem 2.2rem",
              borderRadius: "0.75rem",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--plat-500)",
              fontWeight: 500,
              fontFamily: "var(--font-display)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "20px",
              height: "32px",
              borderRadius: "999px",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <motion.div
              style={{
                width: "3px",
                height: "8px",
                borderRadius: "999px",
                background: "rgba(16, 185, 129, 0.5)",
              }}
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
