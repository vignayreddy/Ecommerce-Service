/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(0,195,255,0.5)',
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(0,195,255,0.7)',
          },
        },
      },
      dropShadow: {
        'glow': '0 0 10px rgba(0,195,255,0.5)',
      },
    },
  },
  plugins: [],
} 