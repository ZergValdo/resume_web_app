/** @type {import('tailwindcss').Config} */
import require from "flowbite/plugin";
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    /* src folder, for example */
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  fontSize: {
    sm: "0.8rem",
    base: "1rem",
    xl: "1.25rem",
    "2xl": "1.563rem",
    "3xl": "1.953rem",
    "4xl": "2.441rem",
    "5xl": "3.052rem",
    
  },
};
