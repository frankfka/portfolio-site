import type { Config } from 'tailwindcss';
import { DARK_MODE_COLORS, LIGHT_MODE_COLORS } from './src/lib/colors';
import { createThemes } from 'tw-colors';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: LIGHT_MODE_COLORS,
      dark: DARK_MODE_COLORS,
    }),
  ],
};
export default config;
