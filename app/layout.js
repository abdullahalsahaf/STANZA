import "./globals.css";

export const metadata = {
  title: "STANZA — Elevate Your Professional Narrative",
  description:
    "Premium professional writing services for Statements of Purpose, Motivation Letters, Cover Letters, CVs, and custom document drafts. Elevate your narrative with STANZA.",
  keywords:
    "professional writing, SOP, motivation letter, cover letter, CV, Europass, document drafting",
  openGraph: {
    title: "STANZA — Premium Professional Writing",
    description:
      "Elevate your professional narrative with expert-crafted documents.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          background: "var(--bg-primary)",
          color: "var(--plat-100)",
          fontFamily: "var(--font-body)",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {/* Ambient background gradients */}
        <div className="ambient-gradient" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
      </body>
    </html>
  );
}
