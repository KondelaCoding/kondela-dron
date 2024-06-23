/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        broadway: ["Broadway", "cursive"],
        outfit: ["Outfit", "sans-serif"],
      },
      keyframes: {
        drone: {
          "0%": { transform: "translateY(20px) translateX(50px)" },
          "100%": { transform: "translateY(100px)" },
        },
      },
      animation: {
        drone: "drone 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
