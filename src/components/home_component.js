import { contentsTheme, ContentThemeContext } from '../assets/scripts/contents_themes';
import { Themes } from '../assets/scripts/themes';
const React = require( 'react' );

function Introduction ( props ) {
	return (
		<section id='intro-section' { ...props } >
			<article id='intro-article'>
				<h2>
					¿Quiénes Somos?
				</h2>

				<p id='intro-p-one'>
					<strong>Somos una compañía 100% mexicana</strong>, con amplia experiencia en el mercado <br />
					de accesorios para la construcción, siendo especialistas en su comercialización.
				</p>

				<p id='intro-p-two'>
					Contamos con una amplia gama de productos de calidad, así como personal capacitado <br />
					y con la disposición para atenderle de manera pronta y eficaz.
				</p>

				<p id='intro-p-three'>
					Nuestro principal objetivo es brindarle productos y servicios deprimera calidad; <br />
					lo que nos ha permitido mantener y fortalecer relaciónes comerciales con nuestros clientes.
					<small>
						Confíe en la calidad y la variedad de nuestra línea de productos
					</small>
				</p>
			</article>
		</section>
	);
}

class BodyContent extends React.Component {
	constructor ( props ) {
		super( props );

		this.appTheme = this.props.theme;
		this.state = {
			theme: contentsTheme.black
		};

		this.toogleTheme = () => {
			this.setState( () => {
				theme:
				this.appTheme === Themes.dark
					? contentsTheme.dark
					: contentsTheme.light
			} );
		};
	}

	componentDidMount = state => {
		return state.theme;
	}

	componentDidUpdate = state => {
		if ( this.appTheme === Themes.dark )
			return state.theme = contentsTheme.dark;
		else
			return state.theme = contentsTheme.light
		return this.toogleTheme;
	}

	render () {
		return (
			<>
				<ContentThemeContext.Provider value={ this.state.theme }>
					<Introduction style={ this.state.theme } />
				</ContentThemeContext.Provider>
			</>
		);
	};
}

BodyContent.contextType = ContentThemeContext;

export default BodyContent;