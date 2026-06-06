"use client";

import { motion } from "framer-motion";

export default function StanzaLogo({ size = 32, className = "" }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Ambient background glow behind the logo */}
      <motion.div
        style={{
          position: "absolute",
          width: `${size * 1.5}px`,
          height: `${size * 1.5}px`,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ position: "relative", zIndex: 1 }}
      >
        <defs>
          <linearGradient id="stanzaLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-300)" />
            <stop offset="50%" stopColor="var(--accent-500)" />
            <stop offset="100%" stopColor="var(--accent-700)" />
          </linearGradient>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Outer shield/nib structure */}
        <motion.path
          d="M50 12 L76 46 C80 54 80 66 72 74 C64 82 50 86 50 86 C50 86 36 82 28 74 C20 66 20 54 24 46 L50 12 Z"
          stroke="url(#stanzaLogoGrad)"
          strokeWidth="4.5"
          strokeLinejoin="round"
          fill="rgba(10, 16, 24, 0.8)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Nib split/ink channel */}
        <motion.line
          x1="50"
          y1="12"
          x2="50"
          y2="52"
          stroke="url(#stanzaLogoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Nib breather hole */}
        <motion.circle
          cx="50"
          cy="56"
          r="4.5"
          fill="url(#stanzaLogoGrad)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1 }}
        />

        {/* Elegant geometric ribbon representing 'S' */}
        <motion.path
          d="M36 68 C 36 62, 44 60, 50 60 C 56 60, 64 62, 64 68 C 64 74, 56 76, 50 76 C 44 76, 36 74, 36 68"
          stroke="var(--plat-200)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
