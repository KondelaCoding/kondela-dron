/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        broadway: ["Broadway", "cursive"],
        outfit: ["Outfit", "sans-serif"],
        decorative: ["Playwrite AU VIC", "cursive"],
      },
      keyframes: {
        drone: {
          // "0%": { transform: "translateY(20px) translateX(50px)" },
          // "100%": { transform: "translateY(100px)" },
          "0%": { transform: "translateY(20px) translateX(50px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        drone: "drone 3s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
      },
      backgroundImage: {
        "custom-background": "url('./src/assets/background.jpeg')",
      },
    },
  },
  plugins: [],
};
