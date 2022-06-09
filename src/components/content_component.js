import intro_img from '../assets/img/intro_img.jpg';
const React = require( 'react' );

class BodyContent extends React.Component {
	render () {
		return (
			<div
				dropzone='true'
				className='dropzone'
				id='div-content'
			>
				<section
					style={ this.props.theme }
					id='intro-section'
					draggable={ true }
					className='draggable'
				>
					<article id='intro-article'>
						<h2>
							¿Quiénes Somos?
						</h2>

						<p className='intro-ps' id='intro-p-one'>
							Somos una compañía 100% mexicana,
							con amplia experiencia dentro del mercado de accesorios para la construcción; <strong>
								O en otras palabras, somos especialistas en el comercio de dicho mercado.</strong>
						</p>

						<p className='intro-ps' id='intro-p-two'>
							Contamos con una amplia línea de productos de alta calidad, así como con <strong>
								personal cualificado y capacitado, para brindarle atención personalizada, pronta y eficaz.
							</strong>
						</p>

						<p className='intro-ps' id='intro-p-three'>
							Nuestro objetivo principal, es ofrecer servicios y productos de primera calidad; <strong>
								lo cual nos ha permitido mantener, sólidas relaciónes de negocios con nuestros clientes.</strong>
							<br />
							<small>
								<i>Puede confiar en la calidad y la variedad de nuestra línea de productos y,
									a la vez en los servicios que ponemos a su disposición.</i>
							</small>
						</p>
					</article>
					<aside id='content-aside'>
						<img src={ intro_img } draggable={ false } alt='decorative banner' id='intro-img' />
					</aside>
				</section>
			</div >
		);
	}
}


export default BodyContent;