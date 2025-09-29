/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}", // Busca en cualquier archivo .html o .js dentro de la carpeta 'src'
    "./*.html", // Busca archivos .html en la raíz del proyecto
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};