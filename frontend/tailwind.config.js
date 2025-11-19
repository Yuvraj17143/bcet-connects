/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2",
        secondary: "#9333EA",
        success: "#10B981",
        error: "#EF4444",
        bgLight: "#F9FAFB",
        cardBg: "#FFFFFF",
        textPrimary: "#1F2937",
        textSecondary: "#6B7280",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
