import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import intro_img from '../assets/img/intro_img.jpg';
const React = require( 'react' );
const { Remarkable } = require( 'remarkable' );
/*var $ = require( 'jquery' );*/
const { DraggableCore } = require( 'react-draggable' )


library.add( fas );

//$( '#intro-section' ).draggable( {
//	scroll: true,
//	scrollSensitivity: 50,
//	drag: function ( event, ui ) {
//		$( this ).addClass( 'dragging' );
//	},
//	stop: function ( event, ui ) {
//		$( this ).removeClass( 'dragging' );
//	}
//} );

//$( '.dropzone' ).droppable( {
//	over: function ( event, ui ) {
//		$( this ).addClass( 'dragover' )
//	},
//	drop: function ( event, ui ) {
//		$( this ).removeClass( 'dragover' );
//	}
//} );

class BodyContent extends React.Component {
	render () {

		return (
			<>
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
					<DraggableCore >
						<MarkdownEditor theme={ this.props.theme } />
					</DraggableCore>
				</div >
				<div>

				</div>
			</>
		);
	}
}

const ejemplo = `# Ejemplo #
---
__Este es un ejemplo de como puedes escribir tu lista de una manera *CREATIVA y SENCILLA*__   
### ✍️ Mi Lista:
- [x] Producto 1
- [x] Producto 2
- [x] Producto 3
   - Sub-producto
   - Sub-producto 2    

### _Notas_: 
		Aqui puedes proveer Notas,
			especificaciones o lo que
		sea que necesites que sepamos


__Tu Email:__ <alguien@ejemplo.com>

o

[Contacto](alguien@ejemplo.com)

Entre muchas otras formas que puedes escribir tu lista o comentarios.

__Nota:__ Puedes conocer más sobre la sintaxis de **Markdown** en la burbuja de información que se encuentra en la esquina superior derecha.`

class MarkdownEditor extends React.Component {
	constructor ( props ) {
		super( props );
		this.state = {
			value: ejemplo
		}
		this.md = new Remarkable();
	}

	handleChange = ( e ) => {
		this.setState( {
			value: e.target.value
		} );
	}

	getRawMarkup () {
		return { __html: this.md.render( this.state.value ) }
	};
	render () {
		return (
			<section className='markdownEditor'
				style={ this.props.theme }			>
				<form id='contact-form'>
					<article id='markdown-article'>

						<fieldset id='fieldset-1'>
							<legend>Solicita una cotización</legend>
							<label htmlFor="markdown-content">
								Escribe los productos que deseas cotizar aquí!
								<FontAwesomeIcon icon='arrow-down' />
							</label>
							<textarea
								id="markdown-content"
								onChange={ e => this.handleChange( e ) }
								value={ this.state.value }
							/>
						</fieldset>

						<fieldset id='fieldset-2'>
							<legend>Previsualiza tu contenido!</legend>
							<samp
								className="content"
								dangerouslySetInnerHTML={ this.getRawMarkup() }
							/>
						</fieldset>
					</article>
				</form>
			</section>
		);
	}
}
export default BodyContent;