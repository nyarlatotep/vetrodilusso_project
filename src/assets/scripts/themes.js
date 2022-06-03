const React = require( 'react' );

export const Themes = {
	dark: {
		backgroundColor: '#000',
		color: '#eee',
		textShadow: '0 0 4px rgb(160 160 160)',
		border: '1px thin #ccc'
	},
	light: {
		backgroundColor: '#fff',
		color: '#222',
		textShadow: '0 0 4px rgb(60 60 60)',
		border: '1px thin #887'
	},
}
export const ThemeContext = React.createContext( Themes.dark );
