/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- ¡VERIFICA ESTA LÍNEA!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
