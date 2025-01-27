/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    "./fitness-form/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F5EDE3',    // Lighter version of the main color
          DEFAULT: '#E3D5CA',  // Main color as requested
          dark: '#D5C0B1',     // Darker version of the main color
        },
        secondary: {
          light: '#F0F8FF',    // Alice Blue
          DEFAULT: '#87CEFA',   // Light sky blue
          dark: '#4682B4',      // Steel blue
        },
        'body-color': '#4A4A4A',  // Dark gray
        'dark': '#2C3E50',        // Dark blue-gray
        'stroke': '#D3D3D3',      // Light gray
        'background': '#F5F5F5',  // Very light gray
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mattone: ['Mattone-150', 'sans-serif'],
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
}