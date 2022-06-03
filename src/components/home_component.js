import intro_img from '../assets/img/intro_img.jpg';
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
							Somos una compañía 100% mexicana,
						
						con amplia experiencia dentro del mercado <br />
						de accesorios para la construcción; O en otras palabras,
						<strong>
							somos especialistas en el comercio de dicho mercado.
						</strong>
					</p>

					<p className='intro-ps' id='intro-p-two'>
						Contamos con una amplia línea de productos de alta calidad, así como con
						<strong>
							personal <br />
							cualificado y capacitado, para brindarle atención personalizada, pronta y eficaz.
						</strong>
					</p>

					<p className='intro-ps' id='intro-p-three'>
						Nuestro objetivo principal, es ofrecer servicios y productos de primera calidad; <br />
						lo cual nos ha permitido mantener, sólidas relaciónes de negocios con nuestros clientes. <br />
						<small>
							Puede confiar en la calidad y la variedad de nuestra línea de productos y,
							a la vez en los servicios que ponemos a su disposición.
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