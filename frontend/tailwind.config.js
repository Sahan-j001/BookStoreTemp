/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          loginBg: '#f4f7fa',
          loginCard: '#ffffff',
          loginPrimary: '#48448c',
          loginAccent: '#26C6DA',
          loginError: '#a1020a',
          loginText: '#22223b',
          loginMuted: '#8d8d8d',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          popIn: {
            '0%': { opacity: 0, transform: 'scale(0.95)' },
            '100%': { opacity: 1, transform: 'scale(1)' },
          },
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-out',
          'pop-in': 'popIn 0.5s cubic-bezier(0.4,0,0.2,1)',
        },
      },
      colors: {
        defaultWhite: '#ffffff',
        defaultGrey: 'rgb(141, 141, 141)',
        defaultBlack: '#000000',
        defaultRed: '#a1020a',
        primaryBlue: '#48448c',
        primaryCyan: '#26C6DA',
        secondaryBlue: '#3182ce',
      },
    },
    plugins: [],
  }
  
  