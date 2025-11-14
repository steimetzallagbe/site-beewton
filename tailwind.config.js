/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app.vue', './pages/**/*.vue', './components/**/*.vue', './layouts/**/*.vue'],
  theme: {
    extend: {
      colors: {
        beewton: {
          primary: {
            400: '#8828F8',
            500: '#7208BD',
            600: '#5C06C3',
            DEFAULT: '#1D1148',
          },
          accent: {
            teal: '#11D9A3',
            orange: '#FF8A34',
            warning: '#FFB457',
            lime: '#B8F340',
          },
          neutral: {
            navy: '#0E1238',
            surface: '#13131A',
            dark: '#2A2F3A',
          },
        },
      },
    },
  },
  plugins: [],
};
