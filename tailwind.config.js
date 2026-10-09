/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#173D32',
        'forest-dark': '#102B24',
        cream: '#F8F8F4',
        sage: '#E6EEE7',
        mint: '#BDE8CF',
        ink: '#17211D',
        muted: '#66736B',
        line: '#DDE5DD',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(16, 43, 36, 0.18)',
        lift: '0 18px 40px -18px rgba(16, 43, 36, 0.28)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
