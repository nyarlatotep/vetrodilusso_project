import './assets/css/App.css';
import BodyContent from './components/content_component';
import { ServicePage } from './components/services_component';
import { ProductsPage } from './components/products_component'
import { ContactPage } from './components/contact_component';
import { Themes, ThemeContext } from './assets/scripts/themes';

function App ( props ) {
	let hash;
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

	if ( props.url !== '/' ) {
		hash = props.url.slice( 1, );
		window.location.hash = hash
	}
	else {
		window.location.hash = '';
	}


	if ( props.url === '/' )
		return (
			<>
				<div style={ props.theme.content } id='app-div-container'>
					{ props.header }
				</div>

				<ThemeContext.Provider value={ props.theme.bodyTheme }>
					<div
						dropzone='true'
						className='dropzone'
						id='div-content'
					>
						<BodyContent theme={ props.theme.bodyTheme } />
					</div >
				</ThemeContext.Provider>
			</>
		);
	if ( props.url === '/products' )
		return (
			<>
				<div style={ props.theme.content } id='app-div-container'>
					{ props.header }
				</div>

				<ThemeContext.Provider value={ props.theme.bodyTheme }>
					<div
						dropzone='true'
						className='dropzone'
						id='div-content'
					>
						<ProductsPage theme={ props.theme.bodyTheme } url={ props.url } />
					</div>
				</ThemeContext.Provider>
			</>
		);
	if ( props.url === '/services' )
		return (
			<>
				<div style={ props.theme.content } id='app-div-container'>
					{ props.header }
				</div>

				<ThemeContext.Provider value={ props.theme.bodyTheme }>
					<div
						dropzone='true'
						className='dropzone'
						id='div-content'
					>
						<ServicePage theme={ props.theme.bodyTheme } url={ props.url } />
					</div>
				</ThemeContext.Provider>
			</>
		);
	if ( props.url === '/contactus' )
		return (
			<>
				<div style={ props.theme.content } id='app-div-container'>
					{ props.header }
				</div>

				<ThemeContext.Provider value={ props.theme.bodyTheme }>
					<div
						dropzone='true'
						className='dropzone'
						id='div-content'
					>
						<ContactPage theme={ props.theme.bodyTheme } url={ props.url } />
					</div>
				</ThemeContext.Provider>
			</>
		);


}
export default App;
