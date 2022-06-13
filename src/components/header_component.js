import App from '../App'
import logo_bco from '../assets/img/logo_bco.png';
import logo_ngo from '../assets/img/logo_ngo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Themes, ThemeContext } from '../assets/scripts/themes';
const React = require( 'react' );

library.add( fas );

class Header extends React.Component {
	constructor ( props ) {
		super( props );
		this.state = {
			theme: Themes.dark,
			url: '/'
		};

		this.toogle_theme = () => {
			let theme;
			this.setState( state => {

				if ( state.theme === Themes.dark )
					theme = Themes.light;
				else if ( state.theme === Themes.dark.bodyTheme )
					theme = Themes.light;

				if ( state.theme === Themes.light )
					theme = Themes.dark;
				else if ( state.theme === Themes.light.bodyTheme )
					theme = Themes.dark;

				return ( {
					theme: theme
				} )
			} )
		}
	}

	page_navigator ( event ) {
		var target = event.target;
		var href = target.name;
		this.setState( {
			url: href,
		} );
	}

	componentDidUpdate = ( state ) => {
		var hash = window.location.hash;
		return {
			[ hash ]: state.url
		}
	}

	componentWillUnmount ( state ) {
		let location;
		if ( state !== '/' ) {
			location = window.location.hash;
			location = state;
		};
		return location;
	}

	render () {
		const header = (
			<header id='app-header'>
				<aside id='header-logo-aside'
					onClick={ () =>
						this.setState( { url: '/' } )
					}>
					{
						this.state.theme === Themes.dark
							? <img src={ logo_bco } id='app-logo' alt='Vetro Di Lusso logo' />
							: <img src={ logo_ngo } id='app-logo' alt='Vetro Di Lusso logo' />
					}
					<p id='vetro-p'>
						Vetro Di Lusso
					</p>
				</aside>

				<menu id='header-menu'>
					<nav>
						<AnchorButtons handler={ ( e ) => this.page_navigator( e ) } />
					</nav>
				</menu>

				<aside id='header-btn-aside'>
					<nav id='btn-aside-nav'>
						<ThemeContext.Provider value={ this.state.theme } >
							<ThemeButton onClick={ this.toogle_theme }>
								{
									this.state.theme === Themes.dark
										? <FontAwesomeIcon icon='sun' />
										: <FontAwesomeIcon icon='moon' />
								}
							</ThemeButton>
						</ThemeContext.Provider>

						<label id='label-search'>
							<FontAwesomeIcon icon='magnifying-glass' />
							<input
								type='search'
								placeholder=' search... '
								id='input-search'
							/>
						</label>
					</nav>
				</aside>
			</header>
		);

		return (
			<ThemeContext.Provider value={ this.state.theme }>
				<App
					header={ header }
					theme={ this.state.theme }
					url={ this.state.url }
				/>
			</ThemeContext.Provider>
		);
	};
}
Header.contextType = ThemeContext;

class ThemeButton extends React.Component {
	render () {
		let props = this.props;
		let theme = this.context;
		return (
			<button
				type='button'
				id='theme-btn'
				title='Toogle themes button'
				style={ theme.bodyTheme }
				{ ...props }
				name='theme button' />
		);
	};
}
ThemeButton.contextType = ThemeContext;

function AnchorButtons ( props ) {
	let arr = [];
	const values = [
		{ key: 1, name: 'Productos', href: '/products', icon: <FontAwesomeIcon icon='barcode' /> },
		{ key: 2, name: 'Servicios', href: '/services', icon: <FontAwesomeIcon icon='shop' /> },
		{ key: 3, name: 'Contacto', href: '/contactus', icon: <FontAwesomeIcon icon='phone' /> }
	];

	for ( var i = 0; i < values.length; i++ ) {
		arr.push( values[ i ] );
	}

	return (
		arr.map( element => {
			return (
				< button
					onClick={ props.handler }
					name={ element.href }
					id={ element.name + 'anchor' }
					className='anchor-btn'
					key={ element.key }
				>
					{ element.name }{ '\n' }
					{ element.icon }
				</button>
			)
		} ) );
}

export default Header;