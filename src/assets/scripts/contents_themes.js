const React = require( 'react' );

export const contentsTheme = {
	dark: {
		backgroundColor: 'rgba(80 80 80 / 65%)',
		color: '#bbb'
	},
	light: {
		backgroundColor: 'rgba(175 175 175 / 65%)',
		color: '#555',
	}
};

export const ContentThemeContext = React.createContext( contentsTheme.black );