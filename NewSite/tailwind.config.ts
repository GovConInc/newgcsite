import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gov-navy': '#0f172a',
        'gov-crimson': '#7f1d1d',
        'gov-blue': '#1e3a8a',
        'gov-silver': '#e2e8f0',
      },
      fontFamily: {
        // Mapping the requested variable to the sans stack
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;