import { ContentThemeContext } from '../assets/scripts/contents_themes';

const React = require( 'react' );

class Introduction extends React.Component {
	render () {
		let props = this.props;

		return (
			<section { ...props }
				id='intro-section'>
				<article id='intro-article'>
					<h2>
						¿Quiénes Somos?
					</h2>

					<p className='intro-ps' id='intro-p-one'>
						<strong>Somos una compañía 100% mexicana</strong>, con amplia experiencia en el mercado <br />
						de accesorios para la construcción, siendo especialistas en su comercialización.
					</p>

					<p className='intro-ps' id='intro-p-two'>
						Contamos con una amplia gama de productos de calidad, así como personal capacitado <br />
						y con la disposición para atenderle de manera pronta y eficaz.
					</p>

					<p className='intro-ps' id='intro-p-three'>
						Nuestro principal objetivo es brindarle productos y servicios deprimera calidad; <br />
						lo que nos ha permitido mantener y fortalecer relaciónes comerciales con nuestros clientes. <br />
						<small>
							Confíe en la calidad y la variedad de nuestra línea de productos
						</small>
					</p>
				</article>
			</section>
		);
	};
}

class BodyContent extends React.Component {
	constructor ( props ) {
		super( props );

		this.state = {
			theme: this.props.theme
		};
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