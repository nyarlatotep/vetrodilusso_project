import intro_img from '../assets/img/intro_img.png';
const React = require( 'react' );

class BodyContent extends React.Component {
	render () {
		return (
			<section
				style={ this.props.theme }
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
				<aside id='content-aside'>
					<img src={ intro_img } alt='decorative banner' id='intro-img' />
				</aside>
			</section>
		);
	};
}
export default BodyContent;