/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primaryRed: '	#ea5353',
				primaryCyan: '#45d3d3',
				primaryOrange: '#fcaf4a',
				primaryBlue: '#549ef2',
				darkBlue: '#4c4e61',
				grayishBlue: '#a3a5ae',
				lightGray: '#fafafa',
			},
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
