/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			xs: '320px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		  '2xl': '1536px',
		},
		extend: {
			colors: {
				primary: '#F9C933',
				'light-primary': '#FEF6DF',
				'dark-gray': '#343A40',
				'light-gray': '#495057',
				'primary-500': '#fce399',
				'dark-black': '#202020',
			},
		
		},
  },
  plugins: [require('tailwindcss-textshadow'), require("@tailwindcss/line-clamp"), require("tailwind-scrollbar-hide")],
}