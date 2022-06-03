import { contentsTheme, ContentThemeContext } from '../assets/scripts/contents_themes';
import { Themes } from '../assets/scripts/themes';
const React = require( 'react' );

class Introduction extends React.Component{
	render () {
		let props = this.props;
		let theme = this.context;

		return (
			<section style={ theme }
				id='intro-section' { ...props } >
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
						lo que nos ha permitido mantener y fortalecer relaciónes comerciales con nuestros clientes. <br/>
						<small>
							Confíe en la calidad y la variedad de nuestra línea de productos
						</small>
					</p>
				</article>
			</section>
		);
	};
}

Introduction.contextType = ContentThemeContext;

class BodyContent extends React.Component {
	constructor ( props ) {
		super( props );

		this.state = {
			theme: contentsTheme.dark,
			appTheme: this.props.theme
		};

		this.toogleTheme = () => {
			this.setState( state => ( {
				theme:
					state.appTheme === Themes.dark
						? contentsTheme.light
						: contentsTheme.dark
			} ) );
		};
	}

	componentDidMount = () => this.toogleTheme;

	componentDidUpdate = () => this.toogleTheme;

	render () {
		return (
			<>
				<ContentThemeContext.Provider value={ this.state.theme }>
					<Introduction onChange={ this.toogleTheme } />
				</ContentThemeContext.Provider>
			</>
		);
	};
}

BodyContent.contextType = ContentThemeContext;

export default BodyContent;