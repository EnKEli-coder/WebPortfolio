/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' :	'#496CE9',
				'secondary' : '#E01A4F',
				'dark-gray':'#313546',
				'light-gray':'#4B5664',
			}
		},
	},
	plugins: [],
}
