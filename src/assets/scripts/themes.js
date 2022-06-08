const React = require( 'react' );

export const Themes = {
	dark: {
		bodyTheme: {
			backgroundColor: '#111',
			color: '#eee',
			textShadow: '0 0 3px rgb(120 120 120)',
		},
		content: {
			backgroundColor: 'rgba(80 80 80 / 95%)',
			color: 'rgb(220 220 220)'
		}
	},
	light: {
		bodyTheme: {
			backgroundColor: '#ddd',
			color: '#111',
			textShadow: '0 0 3px rgb(90 90 90)'
		},
		content: {
			backgroundColor: 'rgba(180 180 180 / 95%)',
			color: 'rgb(5 5 5)',
		}
	}
}
export const ThemeContext = React.createContext( Themes.dark );
