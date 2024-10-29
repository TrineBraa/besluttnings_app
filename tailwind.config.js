/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      purple: "#9333ea",
      white: "#ffffff",
      black: "#030712",
    },
    extend: {
      animation: {
        roll: "roll 20s linear infinite",
        "color-flash": "color-flash 3s infinite",
        shake: "shake 0.2s infinite alternate",
        rotate: "rotate 0.8s infinite linear",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      "color-flash": {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
      shake: {
        "0%, 100%": { transform: "translate(1px, -1px)" },
        "50%": { transform: "translate(-1px, 1px)" },
      },
      rotate: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};
