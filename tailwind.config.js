/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#173B67',
          light: '#EBF2FF',
          dark: '#0F2847',
          50: '#EBF2FF',
          100: '#C7DBFF',
          200: '#95B8FF',
          300: '#5C8FEF',
          400: '#2F80ED',
          500: '#173B67',
          600: '#0F2847',
          700: '#0A1C33',
        },
        secondary: '#2F80ED',
        accent: '#38BDF8',
        success: '#27AE60',
        warning: '#F2994A',
        danger: '#EB5757',
        muted: '#667085',
        surface: '#FFFFFF',
        border: '#E4E7EC',
        'bg-base': '#F5F7FA',
        'text-base': '#172033',
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(23,59,103,0.08)',
        'card-md': '0 4px 16px rgba(23,59,103,0.10)',
        'card-lg': '0 8px 32px rgba(23,59,103,0.12)',
      },
      borderRadius: {
        'card': '10px',
        'xl2': '16px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'slide-in-right': 'slideInRight 0.4s ease-out both',
        'slide-in-left': 'slideInLeft 0.4s ease-out both',
        'count-up': 'countUp 0.6s ease-out both',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeReverse 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
