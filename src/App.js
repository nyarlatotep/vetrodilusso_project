import './assets/css/App.css';
import { Themes } from './assets/scripts/themes'

function App ( props ) {
	const elemnt = document.querySelector( 'body' );
	if ( props.theme === Themes.dark )
		elemnt.style.backgroundColor = Themes.dark.backgroundColor;
	else
		elemnt.style.backgroundColor = Themes.light.backgroundColor;

	return (
		<div style={ props.theme } id='app-div-container'>
			{ props.header }
		</div>
	);
}
//"2211 9159 56  -  2221 1353 84 "
export default App;
