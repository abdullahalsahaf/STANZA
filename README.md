# STANZA — Premium Professional Writing Firm

**Live Website**: [https://stanza-dyd5.onrender.com/](https://stanza-dyd5.onrender.com/)

STANZA is a high-end, responsive single-page web platform built using **React, Next.js (App Router), Tailwind CSS v4, and Framer Motion**. It offers a premium, modern digital experience tailored for clients seeking executive-grade writing services (Statements of Purpose, Motivation Letters, Premium Cover Letters, and CVs).

---

## 🎨 Design System & Visual Aesthetics

STANZA is engineered around a **Dark Corporate Luxury** theme.
- **Color Palette**: An elegant mix of deep slate/black canvas (`#060a10`), rich neon **Emerald Green** accents (`#10b981`), and sleek **Platinum White** typography (`#f0f2f5`).
- **Glassmorphism**: Floating panels utilizing `backdrop-filter` blur with micro-border glows that respond dynamically to hover actions.
- **Anti-Gravity Micro-Animations**: Smooth scroll-triggered floating translations, soft ink-drop loops, and interactive background particle fields driven by Framer Motion.
- **Custom Brand Iconography**: A custom geometric fountain pen nib logo representation embedded cleanly across the navigation and branding sections.

---

## ✨ Features

- **Dynamic Typewriter Subtitle**: Character-by-character looped writing animation in the Hero header showcasing key deliverables (SOPs, Motivation Letters, Cover Letters, etc.).
- **Interactive Services Grid**: Premium service display cards featuring responsive hover shines, smooth elevation scaling, and detailed descriptions of offerings.
- **Editorial About Section**: Balanced copywriting layout paired with a clean 3-card statistics metrics panel (98% Client Satisfaction, 9+ Countries Served, 1+ Year of Experience).
- **Executive Submission Intake**: Interactive contact and document draft request form featuring file upload handling, custom dropdown selection, and focus glow transitions.
- **SEO & Performance Optimized**: Properly formatted semantic HTML structures, structured page metadata, responsive typography clamps, and standard Google Font configurations.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: Playfair Display (Headers) & DM Sans (Body) via standard Google Fonts

---

## 📂 Project Structure

```bash
stanza-site/
├── app/
│   ├── components/
│   │   ├── AboutSection.jsx   # About editorial & statistics metrics grid
│   │   ├── ContactForm.jsx    # Intake form & file upload handling
│   │   ├── Footer.jsx         # Footer branding & social linkages
│   │   ├── HeroSection.jsx    # Animated Hero with typewriter & particles
│   │   ├── Navbar.jsx         # Sticky glassmorphic navbar with StanzaLogo
│   │   ├── ServicesGrid.jsx   # Interactive service cards showcase
│   │   └── StanzaLogo.jsx     # Custom geometric SVG fountain pen logo
│   ├── globals.css            # CSS variables, animations, scrollbars
│   ├── layout.js              # Meta configuration, document wrappers
│   └── page.js                # Core landing page index
├── public/
│   └── ...
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Installation

Clone the repository and install the required dependencies:

```bash
# Navigate to the project folder
cd stanza-site

# Install dependencies
npm install
```

### 2. Run the Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build

To verify and compile the optimized production bundle:

```bash
npm run build
```

---

## 📄 License

This project is proprietary and custom-designed for the branding and operation of **STANZA**. All rights reserved.
