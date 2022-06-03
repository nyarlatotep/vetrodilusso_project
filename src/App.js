import './assets/css/App.css';
import BodyContent from './components/home_component'
import { Themes } from './assets/scripts/themes'

function App ( props ) {
	const elemnt = document.querySelector( 'body' );
	if ( props.theme === Themes.light )
		elemnt.style.backgroundColor = Themes.dark.bodyTheme.backgroundColor;
	else
		elemnt.style.backgroundColor = Themes.light.bodyTheme.backgroundColor;

	return (
		<>
			<div style={ props.theme.bodyTheme } id='app-div-container'>
				{ props.header }
			</div>

			<BodyContent theme={ props.theme.content } />
		</>
	);
}
//"2211 9159 56  -  2221 1353 84 "
export default App;
