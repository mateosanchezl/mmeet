/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fbbf24",
          secondary: "#9ca3af",
          accent: "#fde047",
          neutral: "#6b7280",
          "base-100": "#d1d5db",
          info: "#0ea5e9",
          success: "#84cc16",
          warning: "#b92200",
          error: "#ff8482",
        },
      },
    ],
  },
};
