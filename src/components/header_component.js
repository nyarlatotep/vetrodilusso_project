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
			theme: Themes.dark.bodyTheme,
			bodyTheme: Themes.dark.content
		};

		this.toogle_theme = () => {
			this.setState( state => ( {
				theme:
					state.theme === Themes.dark.bodyTheme
						? Themes.light.bodyTheme
						: Themes.dark.bodyTheme,

				bodyTheme:
					state.bodyTheme === Themes.dark.content
						? Themes.light.content
						: Themes.dark.content
			} ) );
		};

	}
	render () {
		const header = (
			<header id='app-header' style={ { backgroundColor: this.state.theme } }>
				<aside id='header-logo-aside'>
					{
						this.state.theme === Themes.dark.content || Themes.dark.bodyTheme
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
									this.state.theme === Themes.dark.content || Themes.dark.bodyTheme
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
					bodyTheme={ this.state.bodyTheme }
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
				style={ theme }
				{ ...props }
				name='theme button' />
		);
	};
}
ThemeButton.contextType = ThemeContext;

export default Header;