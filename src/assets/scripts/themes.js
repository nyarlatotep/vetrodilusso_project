const React = require( 'react' );

export const Themes = {
	dark: {
		bodyTheme: {
			backgroundColor: '#000',
			color: '#eee',
			textShadow: '0 0 10px rgb(160 160 160)',
		},
		content: {
			backgroundColor: 'rgba(50 50 50 / 95%)',
			color: 'rgb(220 220 220)'
		}
	},
	light: {
		bodyTheme: {
			backgroundColor: '#fff',
			color: '#222',
			textShadow: '0 0 6px rgb(60 60 60)'
		},
		content: {
			backgroundColor: 'rgba(150 150 150 / 95%)',
			color: 'rgb(35 35 35)',
		}
	}
}
export const ThemeContext = React.createContext( Themes.dark );
