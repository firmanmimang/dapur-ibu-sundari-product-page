/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        lazydog: ['Lazy-Dog', 'Lato', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'background-green-1': 'var(--bg-green-1)',
        'background-green-2': 'var(--bg-green-2)',
        'background-green-3': 'var(--bg-green-3)',
      },
    },
  },
  plugins: [],
}

