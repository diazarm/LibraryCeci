const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
      },

     
    },
  },
  plugins: [nextui()],
};

// background: "var(--background)",
//foreground: "var(--foreground)",
/* colors: {
       
backgroundImage: {
  'sancho': "url('/alsancho/public/sancho.png')",
 },
 
 
},*/