/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Logo-based color scheme
        primary: {
          red: '#C80000',
          yellow: '#FFCC00',
          orange: '#FFA500',
          'orange-light': '#FFD700',
        },
        brand: {
          // Primary red color
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#C80000', // Main red
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        accent: {
          // Yellow/Orange accent colors
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#FFCC00', // Main yellow
          500: '#FFA500', // Orange
          600: '#FFD700', // Orange-light
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
        }
      }
    },
  },
  plugins: [],
};
