import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7777', 
        secondary: '#dd6c6c', 
        accent: '#fd9595', 
        neutral: '#efb4b4', 
        background: '#ecf0f1', 
        highlight: '#ffb6c1', 
      },
      textColor: {
        primary: '#ffffff', 
        secondary: '#2a2a2a', 
        accent: '#5b5b5b', 
        neutral: '#333333', 
        background: '#333333', 
        highlight: '#333333', 
        link: "#3498db"
      },
    },
  },
  plugins: [],
};
export default config;
