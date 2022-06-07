const React = require( 'react' );

export const Themes = {
	dark: {
		bodyTheme: {
			backgroundColor: '#111',
			color: '#eee',
			textShadow: '0 0 10px rgb(160 160 160)',
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
			textShadow: '0 0 6px rgb(60 60 60)'
		},
		content: {
			backgroundColor: 'rgba(180 180 180 / 95%)',
			color: 'rgb(5 5 5)',
		}
	}
}
export const ThemeContext = React.createContext( Themes.dark );
