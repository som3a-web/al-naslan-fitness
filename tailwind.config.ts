import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: "#D7FF00",
        carbon: "#0A0A0A",
        ash: "#171717",
        chalk: "#F5F5F5",
        muted: "var(--muted)",
        // Extracted from the NFC dragon-flame logo
        flame: {
          50: "#FFF4E6",
          100: "#FFE3BF",
          200: "#FFC880",
          300: "#FFAA40",
          400: "#FF8A1A",
          500: "#FF6A00", // primary orange
          600: "#F24405",
          700: "#D62411", // ember red
          800: "#A11608",
          900: "#6B0D03",
        },
        gold: "#FFB020",
        ember: "#E0301E",
        ink: {
          950: "#070708",
          900: "#0B0B0D",
          850: "#101015",
          800: "#16161C",
          700: "#1E1E26",
          600: "#2A2A35",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        flame: "0 10px 40px -10px rgba(255,106,0,0.45)",
        "flame-lg": "0 20px 80px -15px rgba(255,106,0,0.55)",
        glass: "0 8px 32px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "flame-gradient": "linear-gradient(120deg,#FFB020 0%,#FF6A00 45%,#E0301E 100%)",
        "flame-radial": "radial-gradient(circle at 50% 0%,rgba(255,106,0,0.25),transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
