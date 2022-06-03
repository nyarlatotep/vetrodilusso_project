const React = require( 'react' );

export const contentsTheme = {
	dark: {
		backgroundColor: 'rgba(80 80 80 / 65%)',
		color: '#bbb'
	},
	light: {
		backgroundColor: 'rgba(200 200 200 / 65%)',
		color: 'rgb(30 30 30)',
	}
};

export const ContentThemeContext = React.createContext( contentsTheme.black );