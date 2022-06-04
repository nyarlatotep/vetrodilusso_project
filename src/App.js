import './assets/css/App.css';
import BodyContent from './components/content_component'
import { Themes, ThemeContext } from './assets/scripts/themes'


function App ( props ) {
	const elemnt = document.querySelector( 'body' );

	if ( props.theme === Themes.light )
		elemnt.style.backgroundColor = Themes.dark.bodyTheme.backgroundColor;
	else if ( props.theme === Themes.light.bodyTheme )
		elemnt.style.backgroundColor = Themes.dark.bodyTheme.backgroundColor;

	if ( props.theme === Themes.dark )
		elemnt.style.backgroundColor = Themes.light.bodyTheme.backgroundColor;
	else if ( props.theme === Themes.dark.bodyTheme )
		elemnt.style.backgroundColor = Themes.light.bodyTheme.backgroundColor;

	return (
		<>
			<div style={ props.theme.bodyTheme } id='app-div-container'>
				{ props.header }
			</div>

			<ThemeContext.Provider value={ props.theme.content }>
				<BodyContent theme={ props.theme.content } />
			</ThemeContext.Provider>
		</>
	);
}
export default App;
