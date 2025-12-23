/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          purple: '#9b4dff',
          magenta: '#d600c9',
          pink: '#ff7bd8',
          orange: '#ff9d4d',
          blue: '#4cc3ff',
          green: '#2dd4bf',
        },
        surface: {
          light: '#fdf8ff',
          panel: '#ffffff',
          border: '#e9e5f7',
        },
      },
      boxShadow: {
        card: '0 10px 40px rgba(0,0,0,0.06)',
        soft: '0 6px 20px rgba(0,0,0,0.04)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}

