import App from '../App'
import logo from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Themes, ThemeContext } from '../assets/scripts/themes'
const React = require( 'react' );

library.add( fas );

class Header extends React.Component {
	constructor ( props ) {
		super( props );
		this.state = {
			theme: Themes.dark,
		};

		this.toogle_theme = () => {
			this.setState( state => ( {
				theme:
					state.theme === Themes.dark
						? Themes.light
						: Themes.dark,
			} ) );
		};

	}
	render () {
		const header = (
			<header id='app-header'>

				<aside id='header-logo-aside'>
					<img
						src={ logo }
						id='app-logo'
						alt='Vetrodilusso logo' />
					Vetrodilusso
				</aside>

				<aside id='header-btn-aside'>
					<nav id='btn-aside-nav'>
						<label id='label-search'>
							<FontAwesomeIcon icon='' />
							<input
								type='text'
								placeholder=' "Search" '
								id='input-search'
							/>
						</label>

						<ThemeContext.Provider value={ this.state.theme } >
							<ThemeButton onClick={ this.toogle_theme }>
								{
									this.state.theme === Themes.dark
										? <FontAwesomeIcon icon='sun' />
										: <FontAwesomeIcon icon='moon' />
								}
							</ThemeButton>
						</ThemeContext.Provider>

					</nav>
				</aside>
			</header>
		);

		return (
			<App
				header={ header }
				theme={ this.state.theme }
			/>
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
				style={ theme }
				{ ...props }
				name='theme button' />
		);
	};
}
ThemeButton.contextType = ThemeContext;

export default Header;