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
			theme: Themes.dark
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
	render () {
		const header = (
			<header id='app-header' style={ { backgroundColor: this.state.theme.bodyTheme } }>
				<aside id='header-logo-aside'>
					{
						this.state.theme === Themes.dark
							? <img src={ logo_bco } id='app-logo' alt='Vetro Di Lusso logo' />
							: <img src={ logo_ngo } id='app-logo' alt='Vetro Di Lusso logo' />
					}
					<p id='vetro-p'>
						Vetro Di Lusso
					</p>
				</aside>

				<aside id='header-btn-aside'>
					<nav id='btn-aside-nav'>
						<ThemeContext.Provider value={ this.state.theme } >
							<ThemeButton onClick={ this.toogle_theme }>
								{
									this.state.theme === Themes.dark
										? <FontAwesomeIcon icon='moon' />
										: <FontAwesomeIcon icon='sun' />
								}
							</ThemeButton>
						</ThemeContext.Provider>
						<label id='label-search'>
							<FontAwesomeIcon icon='magnifying-glass' />
							<input
								type='text'
								placeholder=' Type here... '
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
				style={ theme.bodyTheme }
				{ ...props }
				name='theme button' />
		);
	};
}
ThemeButton.contextType = ThemeContext;

export default Header;