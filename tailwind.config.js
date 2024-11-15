/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //1) Animations
      keyframes: {
        //1) Fadein animation
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // 2)Bounce animation
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
         //3) Pulse Text Effect
         pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        //4) slide in left animation
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        slideInRight: {
          '0%': { transform: 'translateX(20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out',
        // 2)bounce animation
        bounceOnce: 'bounce 3s 2 ease-out',
//3) Pulse Text Effect
        pulse: 'pulse 1.5s infinite',
        //4)) slideInLeft
        slideInLeft: 'slideInLeft 3s ease-out forwards',
        // 5)SlideInRight
        slideInRight: 'slideInRight 3s ease-out forwards',

      },

      colors: {
        primary: "#1a202c", // Dark theme for backgrounds
        accent: "#4a5568", // Accent color for sections
        textPrimary: "#edf2f7", // Light text color
      },
    },
  },
  plugins: [require("daisyui")],
};
