/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          peach: '#FCE4D6',
          'peach-dark': '#FCD5B4',
          blue: '#E0F2FE',
          'blue-dark': '#BAE6FD',
          pink: '#FFE4E6',
          'pink-dark': '#FECDD3',
          sage: '#DCFCE7',
          'sage-dark': '#BBF7D0',
          lavender: '#F3E8FF',
          'lavender-dark': '#E9D5FF'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        arabic: ['Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
