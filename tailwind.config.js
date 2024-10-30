/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        purple: "#9333ea",
        white: "#ffffff",
        black: "#030712",
        pink: "#e91e63",
        yellow: "#ffeb3b",
      },
      animation: {
        roll: "roll 20s linear infinite",
        "color-flash": "color-flash 3s infinite",
        shake: "shake 0.2s infinite alternate",
        rotate: "rotate 0.8s infinite linear",
        "bg-slide": "bg-slide 3s ease infinite",
        sparkle: "sparkle 1.5s ease infinite",
        pulse: "pulse 2s ease infinite",
        "bounce-push": "bounce-push 1s ease infinite",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
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
        "bg-slide": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(1)", opacity: 0.8 },
          "50%": { transform: "scale(1.2)", opacity: 1 },
        },
        "bounce-push": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
