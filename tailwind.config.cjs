/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
		  {
			mytheme: {
  "primary": "#2E4F4F",
  "secondary": "#0E8388",
  "accent": "#CEBE4D",
  "neutral": "#2D2B36",
  "base-100": "#2C3333",
  "info": "#87CCE3",
  "success": "#1DDDB0",
  "warning": "#A47F0E",
  "error": "#EC515B",
			},
		  },
		],
	  },
}
