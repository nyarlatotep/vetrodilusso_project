import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import intro_img from '../assets/img/intro_img.jpg';
const React = require( 'react' );
const { Remarkable } = require( 'remarkable' );

library.add( fas );

class BodyContent extends React.Component {
	render () {
		return (
			<>

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

export class MarkdownEditor extends React.Component {
	constructor ( props ) {
		super( props );

		this.state = {
			value: ejemplo,
			visible: false,
			text: <FontAwesomeIcon icon='book-open' />
		};

		this.table_display = () => {
			this.setState( state => {
				var isvisible =
					state.visible === false
						? true
						: false
				var text =
					state.visible === false
						? <FontAwesomeIcon icon='book' />
						: <FontAwesomeIcon icon='book-open' />
				return {
					visible: isvisible,
					text: text
				};
			} );
		}
		this.md = new Remarkable();
	};

	shouldComponentUpdate () {
		return true;
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
				style={ this.props.theme } >

				<aside id='multiform-aside'>
					<nav id='multiform-nav'>
						<menu className='multi-form-menu' >
							<button type='button'
								id='table-displayer'
								onClick={ this.table_display }>
								{ this.state.text }
							</button>
						</menu>
						<article
							id='table-article'
							hidden={
								this.state.visible === true
									? false
									: true
							} >
							<ListTable />
						</article>
					</nav>
				</aside>

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

function ListTable () {
	const list = require( '../assets/data/ProductosVetro.json' );
	const products = list.productos;
	let li = [];

	for ( let i = 0; i < products.length; i++ ) {
		var prod = products[ i ];
		li.push( prod );
	};

	let keys = []
	for ( let k = 1; k < products.length; k++ ) {
		var key = [
			{ id1: k, id2: k * 100, id3: k * 200, id4: k * 300, id5: k * 400 }
		];
		keys.push( key[ 0 ] );
	}

	var baño = li.filter( val => val.categoría.match( 'herrajes de baño' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );
	var exterior = li.filter( val => val.categoría.match( 'herrajes fachada exterior' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );
	var carga = li.filter( val => val.categoría.match( 'línea de carga' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );
	var seguridad = li.filter( val => val.categoría.match( 'línea de seguridad' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );
	var copas = li.filter( val => val.categoría.match( 'copas y muelas' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );
	var metalica = li.filter( val => val.categoría.match( 'discos bd linea metalica' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );
	var pulido = li.filter( val => val.categoría.match( 'discos bd linea pulido' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );
	var lijas = li.filter( val => val.categoría.match( 'línea de lijas' ) ).map( val => {
		return (
			<tr key={ keys.id1 }>
				<td key={ keys.id2 } className='td-prod'>
					<li key={ keys.id3 }>
						<label key={ keys.id4 }>
							<input type='checkbox' key={ keys.id5 } />
							{ val.producto }
						</label>
					</li>
				</td >
				<td key={ keys.id5 } className='td-prod'>
					<li key={ keys.id4 }>
						<label key={ keys.id3 }>
							<input type='hidden' key={ keys.id2 } />
							{ val.tipo }
						</label>
					</li>
				</td >
				<td key={ keys.id1 } className='td-prod'>
					<li key={ keys.id2 }>
						<label key={ keys.id5 }>
							<input type='hidden' key={ keys.id3 } />
							{ val.categoría }
						</label>
					</li>
				</td >
			</tr>
		)
	} );

	const array = [ baño, exterior, carga, seguridad, copas, metalica, pulido, lijas ]
	let res = [];
	res.push( array );
	var map = res.map( val => val )
	return (
		<>
			<table id='product-table'>
				<caption>
					Lista de productos
				</caption>
				<thead>
					<tr>
						<th>
							Producto
						</th>
						<th>
							Tipo
						</th>
						<th>
							Categoría
						</th>
					</tr>
				</thead>
				<tbody id='table-body'>
					{ map }
				</tbody>
			</table>
		</>
	);
}
export default BodyContent;