/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand purple used across buttons, accents and the primary CTA
        brand: {
          50: '#f1effe',
          100: '#e5e1fd',
          200: '#cec7fb',
          300: '#b0a4f8',
          400: '#9179f2',
          500: '#7c5cfc',
          600: '#6c4ef0',
          700: '#5b3fd6',
          800: '#4a34ad',
          900: '#3d2f8a',
        },
        // Soft pink used in the hero gradient
        blush: {
          100: '#fbe9f3',
          200: '#f7d5e7',
          300: '#f2c0da',
        },
        ink: {
          DEFAULT: '#161320',
          soft: '#2b2740',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(76, 52, 173, 0.25)',
        card: '0 12px 30px -12px rgba(22, 19, 32, 0.12)',
        float: '0 18px 40px -12px rgba(22, 19, 32, 0.22)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      backgroundImage: {
        'hero-blush': 'linear-gradient(135deg, #fbe0ee 0%, #f4dcf0 45%, #e9e2fb 100%)',
        'hero-lavender': 'linear-gradient(160deg, #ece7fd 0%, #ddd4fb 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
