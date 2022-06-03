const React = require( 'react' );

export const Themes = {
	dark: {
		bodyTheme: {
			backgroundColor: '#000',
			color: '#eee',
			textShadow: '0 0 10px rgb(160 160 160)',
		},
		content: {
			backgroundColor: 'rgba(80 80 80 / 65%)',
			color: '#bbb'
		}
	},
	light: {
		bodyTheme: {
			backgroundColor: '#fff',
			color: '#222',
			textShadow: '0 0 6px rgb(60 60 60)'
		},
		content: {
			backgroundColor: 'rgba(200 200 200 / 65%)',
			color: 'rgb(30 30 30)',
		}
	}
}
export const ThemeContext = React.createContext( Themes.dark );
