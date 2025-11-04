/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: { extend: {} },
  safelist: [
    // layout
    { pattern: /^(container|min-h-screen|fixed|sticky|inset-x-0|bottom-0|top-0|z-\d+)$/ },
    { pattern: /^(grid|flex|items-center|justify-between|justify-center|gap-\d+|cols-\d+)$/ },
    { pattern: /^(p-\d+|px-\d+|py-\d+|pt-\d+|pb-\d+|pl-\d+|pr-\d+)$/ },

    // sizing, borders, radius, shadow
    { pattern: /^(w-full|h-\d+|max-w-\w+|rounded(-\w+)?-\d+|border(-\w+)?(\/\d+)?|shadow(-\w+)?)$/ },

    // colors (neutral, slate, zinc, blue, cyan, emerald, orange, violet)
    { pattern: /^(bg|text|border)-(white|black|neutral|slate|zinc|blue|cyan|emerald|orange|violet)-(50|100|200|300|400|500|600|700|800|900)(\/\d+)?$/ },

    // text
    { pattern: /^(text-\[.*\]|text-xs|text-sm|text-base|text-lg|text-xl|font-(medium|semibold|bold)|italic|uppercase|tracking-\w+)$/ },

    // misc
    { pattern: /^(cursor-pointer|list-disc|pl-\d+|space-y-\d+|backdrop-blur)$/ },
    { pattern: /^(sr-only|no-scrollbar)$/ }
  ],
  plugins: []
};
