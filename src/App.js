import './assets/css/App.css';
import BodyContent from './components/content_component'
import { Themes, ThemeContext } from './assets/scripts/themes'


function App ( props ) {
	const elemnt = document.querySelector( 'body' );
	var backLight = Themes.light.bodyTheme.backgroundColor;
	var backDark = Themes.dark.bodyTheme.backgroundColor;

	if ( props.theme === Themes.light )
		elemnt.style.backgroundColor = backLight;
	else if ( props.theme === Themes.light.bodyTheme )
		elemnt.style.backgroundColor = backLight;

	if ( props.theme === Themes.dark )
		elemnt.style.backgroundColor = backDark;
	else if ( props.theme === Themes.dark.bodyTheme )
		elemnt.style.backgroundColor = backDark;

	return (
		<>
			<div style={ props.theme.content } id='app-div-container'>
				{ props.header }
			</div>

			<ThemeContext.Provider value={ props.theme.bodyTheme }>
				<BodyContent theme={ props.theme.bodyTheme } />
			</ThemeContext.Provider>
		</>
	);
}
export default App;
