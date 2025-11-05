/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,jsx,ts,tsx}", "!./node_modules/**"],
  theme: { extend: {} },
  // safelist: [...]  // keep if you want, not required
  plugins: []
};
