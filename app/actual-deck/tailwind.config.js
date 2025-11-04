/** @type {import('tailwindcss').Config} */
export default {
  // we run from app/actual-deck, so point at files *inside this folder*
  content: [
    "./**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: { extend: {} },
  plugins: []
};
