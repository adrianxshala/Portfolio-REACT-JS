/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ['"DM Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        9: "9px",
      },
      colors: {
        "buttoni": "rgba(215, 255, 224, 1)",
        "dark-content": "var(--dark-content, #666)",
        "custom-pink": "rgba(231, 15, 170, 1)",
        "custom-blue": "rgba(0, 192, 253, 1)",
        lightgray: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
